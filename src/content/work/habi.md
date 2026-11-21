---
title: Habi
pitch: One private app that tells you what needs you today.
order: 1
year: 2026
cover: ../../assets/work/habi-banner.png
coverAlt: 'Habi on Android: the Money, Todos, Home, Vehicle and Weather screens, with sample data'
repo: https://github.com/charlitomecarez/habi
stack: [Expo, React Native, NativeWind, Supabase]
# Rendered with HyperFrames from video/ (habi-site's real Habi clips).
video:
  src: /media/habi-proof.mp4
  poster: /media/habi-proof.webp
  width: 1200
  height: 750
  phone:
    src: /media/habi-proof-phone.mp4
    poster: /media/habi-proof-phone.webp
    width: 720
    height: 900
  label: 'Habi with sample data. Home says rent is due today and its tiles update. In Todos, a rent reminder drops in and gets checked off, and rice gets a reminder for tomorrow. The Vault opens with a PIN, copies the GCash password and locks again.'
# From github.com/charlitomecarez/habi/releases, dates in Philippine time.
releases:
  - version: v1.0.0
    date: '2026-11-04'
    note: 'First release: sign-in, todos, vehicle, inventory'
  - version: v1.1.0
    date: '2026-11-05'
    note: 3 fixes and 23 new features, nine new modules
  - version: v1.2.0
    date: '2026-11-05'
    note: Bank statement import and three fixes
  - version: v1.2.1
    date: '2026-11-06'
    note: Alarms, Ulam, Travel and a new look
  - version: v1.2.2
    date: '2026-11-06'
    note: Voice Inbox and accounts for more than one person
  - version: v1.3.0
    date: '2026-11-10'
    note: 'The largest yet: Weather, Sports, two widgets'
  - version: v1.4.0
    date: '2026-11-10'
    note: News, a vault PIN and a recovery key
  - version: v1.4.1
    date: '2026-11-10'
    note: Renamed to Habi, ready to go public
  - version: v1.5.0
    date: '2026-11-11'
    note: 'Faster: database moved to Singapore; size budget in CI'
  - version: v1.6.0
    date: '2026-11-11'
    note: F1 and MotoGP, Movies; coverage gate on every PR
  - version: v2.0.0
    date: '2026-11-12'
    note: 'The redesign: smooth motion, a new Habi mark'
  - version: v2.0.1
    date: '2026-11-12'
    note: 'Phone fixes; Money split into Today, This month, This year'
---

## The problem

A day in the Philippines has a lot to remember. The motorbike's next oil change at a certain kilometre. What is left in GCash and MariBank this month. An ulam under ₱99. Voice notes in Taglish.

Todo apps, finance apps and service trackers each hold one part. None of them puts the parts together in one view.

## What Habi does

Habi is one private Android app. Home says in one sentence what needs you today, and every module feeds it: todos, money, the vehicle, habits, health, weather, documents, a password vault and more.

Sign-up is off. Only the admin adds accounts, and each account has fully separate data.

## How I built it

- **App:** Expo and React Native, styled with NativeWind.
- **Backend:** Supabase Postgres with row-level security on every user-owned table, so one account never reaches another's rows.
- **Reminders:** modules write rows to one `reminders` table.
- **Vault:** the phone encrypts each entry with XChaCha20-Poly1305 before it reaches Supabase.
- **Cost:** everything runs on free tiers.

## How it shipped

Habi went from v1.0.0 on 4 Nov 2026 to v2.0.1 on 12 Nov 2026: 12 releases in 9 days.

## What I learned

I learned Android development with Expo while I built Habi.

## Links

- [Source code on GitHub](https://github.com/charlitomecarez/habi)
- [Release records](https://github.com/charlitomecarez/habi/blob/main/docs/releases/index.md)
