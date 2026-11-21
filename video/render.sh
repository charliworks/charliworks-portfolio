#!/usr/bin/env bash
# Render the portfolio clips with HyperFrames, then make the web copies and
# their posters in ../public/media/.
#   ./render.sh                 the clips the site uses (proof, proof-phone)
#   ./render.sh tracking        the unused hero tracking strip, kept as source
#   QUALITY=draft ./render.sh   fast preview
# HyperFrames comes from the video-editing-workflow repo
# (tools/setup.sh --animated-graphics). Point HF elsewhere if needed.
set -euo pipefail
cd "$(dirname "$0")"
HF="${HF:-$HOME/Documents/GitHub/video-editing-workflow/tools/graphics/animated/node_modules/.bin/hyperframes}"
QUALITY="${QUALITY:-delivery}"
export HYPERFRAMES_NO_TELEMETRY=1 DO_NOT_TRACK=1

# Web width and poster time (s) for each clip. (macOS bash 3.2: no maps.)
settings() {
  case "$1" in
    proof) echo "1200 5" ;;
    proof-phone) echo "720 4.8" ;;
    tracking) echo "640 7.4" ;;
    *) echo "Unknown clip: $1" >&2; exit 1 ;;
  esac
}

clips=("$@")
[[ ${#clips[@]} -eq 0 ]] && clips=(proof proof-phone)

mkdir -p renders ../public/media
for clip in "${clips[@]}"; do
  read -r width poster <<<"$(settings "$clip")"
  echo "▶ $clip ($QUALITY)"
  "$HF" render . -c "compositions/$clip.html" -q "$QUALITY" --fps 30 \
    -o "renders/$clip-master.mp4" 2>&1 | grep -E "Render complete|rendered in|rror" || true
  ffmpeg -y -loglevel error -i "renders/$clip-master.mp4" \
    -vf "scale=$width:-2" -c:v libx264 -preset slow -crf 27 \
    -pix_fmt yuv420p -an -movflags +faststart "../public/media/habi-$clip.mp4"
  ffmpeg -y -loglevel error -ss "$poster" -i "renders/$clip-master.mp4" \
    -frames:v 1 -vf "scale=$width:-2" "renders/$clip-poster.png"
  cwebp -quiet -q 82 "renders/$clip-poster.png" -o "../public/media/habi-$clip.webp"
done
ls -la ../public/media/
