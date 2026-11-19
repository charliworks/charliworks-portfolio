---
title: Habi
pitch: One private app that tells you what needs you today.
order: 1
year: 2026
cover: ../../assets/work/habi-banner.png
coverAlt: 'Habi on Android: the Money, Todos, Home, Vehicle and Weather screens, with sample data'
repo: https://github.com/charlitomecarez/habi
stack: [Expo, React Native, NativeWind, Supabase]
---

## The problem

A day in the Philippines has a lot to remember. The motorbike's next oil change at a certain kilometre. What is left in GCash and MariBank this month. An ulam under ₱99. Voice notes in Taglish.

Todo apps, finance apps and service trackers each hold one part. None of them puts the parts together in one view.

## What Habi does

Habi is one private Android app. Home says in one sentence what needs you today, and every module feeds it: todos, money, the vehicle, habits, health, weather, documents, a password vault and more.

Sign-up is off. Only the admin adds accounts, and each account has fully separate data.

## The rules it follows

- The app speaks first. It says what needs action, and the person does not have to look for it.
- Numbers are the content. Money, kilometres and hours lead each screen.
- A log takes seconds, with one hand, outside.
- Private by default. Personal data stays in the account, and health data stays on the phone unless you turn on the health check.

## How I built it

- **App:** Expo and React Native, styled with NativeWind. Android first, with a web build second. Two home screen widgets, and native modules for alarms, screen time and a secure clipboard.
- **Backend:** Supabase Postgres with row-level security on every user-owned table, so one account never reaches another's rows.
- **Reminders:** modules write rows to one `reminders` table. One Edge Function, run by `pg_cron`, sends every push. Alarms ring from the phone, because a push can arrive late.
- **Vault:** the phone encrypts each entry with XChaCha20-Poly1305 before it reaches Supabase. The key comes from the master password through Argon2id.
- **Cost:** everything runs on free tiers.

## How it shipped

Habi went from v1.0.0 on 4 Nov 2026 to v2.0.1 on 12 Nov 2026: 12 releases in 9 days. The repo had 263 commits by 13 Nov.

- Each release has a record in `docs/releases/`. Since v1.3.0, the larger releases also have a written plan, a design and release notes.
- CI runs the type check, lint, unit tests with coverage, a web bundle budget and Lighthouse on every pull request.
- End-to-end tests cover the web build with Playwright and the Android app with Maestro flows.

## Links

- [Source code on GitHub](https://github.com/charlitomecarez/habi)
- [Release records](https://github.com/charlitomecarez/habi/blob/main/docs/releases/index.md)
