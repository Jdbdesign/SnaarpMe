# SnaarpMe — "Everything You Need" Features Showcase Section

**Placement:** New section, sits between the existing "How SnaarpMe Works" (#how) section and the "Feature Deep-Dive Rows" (#product) section — or can replace/absorb the 4 deep-dive rows entirely, since this section is designed to be the single richest, most persuasive block on the page. Recommend section id `#features`.

**Purpose:** This is the section that has to do the selling. Someone who scrolls past everything else should still stop here. It should feel like a live product screenshot they can poke at, not a static marketing list — the interactivity itself is part of the pitch ("look how much is packed into this thing").

---

## 1. Section Frame

**Eyebrow (small caps label):**
`EVERYTHING YOU NEED TO RUN MEETINGS`

**Headline (Lora serif, same treatment as other H2s — `clamp(30px,3.4vw,42px)`, `#17131F`, one word in `#6D28D9` italic):**
> One product. Every part of the meeting, *handled.*

**Subhead (17-19px, `#5A5468`, max-width ~560px):**
> Booking, video, routing, and reminders — SnaarpMe isn't a scheduling link with extras bolted on. It's the whole meeting lifecycle, in one place. Click through to see each piece.

**Optional trust chip row beneath subhead** (small, reuses the hero's checkmark-pill style):
`✓ No per-feature paywalls on Pro` · `✓ Native video, nothing to install` · `✓ Unlimited meetings, every plan`

---

## 2. Interaction Model (this is the part that makes it "outstanding")

### Desktop / tablet (≥ 900px): Vertical tab dashboard, auto-advancing

- Layout: two columns inside a single bordered "app shell" card (reuse the site's card language: `#fff` background, `1px solid #ECE7F6` border, `22px` border-radius, soft shadow `0 40px 80px -48px rgba(35,20,70,.45)`) — so the whole section reads as **one cohesive product window**, not five separate cards.
- **Left rail (≈300px, sticky within the card):** a vertical list of 5 tabs. Each tab row shows: icon in a rounded `36px` tile, feature name (bold, 15px), one-line teaser (13px, `#8A8599`), and — only on the **active** tab — a thin horizontal progress bar underneath that fills left-to-right over the auto-advance duration.
- **Right panel (flex:1):** the mockup + supporting copy for whichever tab is active. Panel content cross-fades and slides up slightly on change (`opacity 0→1`, `translateY(10px→0)`, `380ms cubic-bezier(.22,.8,.3,1)`), mirroring the existing `data-reveal` easing already used sitewide.
- **Auto-advance:** cycles to the next tab every **7 seconds** (`ms(7000)` via the same `this.t()` timer pattern used for the hero demo), pausing on hover/focus and resuming on mouse-leave. Manually clicking a tab jumps straight there and resets the timer — same pattern as the existing tabbed "Built for how you work" section, but with the added progress-bar affordance.
- **Progress bar** is the signature move: gives the section a "this thing is alive" feel without being a video, and it visually communicates depth (5 distinct segments = 5 real capabilities) before anyone reads a word.
- Reduced-motion: disable auto-advance and the progress-bar animation; tabs remain manually clickable; panel swap becomes an instant (no-transition) content swap.

### Mobile (< 900px): Accordion

- Same 5 items, stacked, collapsed by default with the first one open.
- Tapping a header expands its panel (mockup + copy) inline and collapses whichever was open — identical mechanics to the existing FAQ accordion (`aria-expanded`, rotating `+` icon, single-open-at-a-time).
- No auto-advance on mobile (avoid disorienting an in-progress read); the mockup for the open item renders at a slightly condensed scale of the desktop version.

### Shared micro-interactions across breakpoints
- Hovering an inactive tab (desktop) tints its background to `#FAF8FE` and its icon tile to `#F4F0FE` — a preview affordance.
- Each mockup includes at least one small "live" animated detail even at rest (a blinking live-dot, a subtly pulsing badge, or a counter) so the panel doesn't feel like a static screenshot — consistent with the pulsing cursor and "Live" badges already used elsewhere on the page.
- Keyboard: full roving-tabindex support, arrow keys move between tabs, matches `role="tablist"` pattern already used in the "Built for how you work" section.

---

## 3. The Five Feature Tabs

Each tab below includes: tab-rail copy, full panel copy, bullet capabilities, a highlight stat/badge, and a **detailed mockup spec** precise enough to build directly (styled in the site's existing visual language: `#6D28D9` purple, `Lora` for headings, `Liberation Mono` for data/timestamps, soft `#F4F0FE` tint fills, `#0EA47A` green for success states).

---

### 3.1 — Smart Booking & Scheduling

**Tab rail:** Icon: calendar-check. Label: **Smart Booking**. Teaser: *"Real availability, not a static grid."*

**Panel headline:** Book a meeting without the "does Tuesday work?" thread.

**Body:** SnaarpMe reads every connected calendar in real time, so the only times ever shown are times that are actually free — buffers, notice periods, and daily limits already applied. Whoever's booking sees the time in *their* time zone, not yours.

**Bullets:**
- Live availability pulled from every connected calendar, updated instantly
- Buffers, minimum notice, and daily meeting caps respected automatically
- Automatic time-zone conversion for the invitee

**Highlight badge:** `0 double-bookings`

**Mockup spec:** Reuse/extend the hero's booking-widget visual at a slightly larger scale: month calendar on the left with "popular day" highlighting, a live time-slot list on the right that visibly re-sorts when a tint toggle "Show only mornings" is switched on (three slots fade out, remaining ones re-flow upward — a small scripted demo, not full interactivity). Footer strip: `GMT+1 · London → auto-converted to GMT-5 · New York` with a small two-way arrow icon between the two zone labels.

---

### 3.2 — Built-In Video Calling

**Tab rail:** Icon: video-camera. Label: **Video Calling**. Teaser: *"No links to hunt for, no app to install."*

**Panel headline:** The call link is already inside the invite. Always.

**Body:** Every SnaarpMe meeting can carry a native video room by default — generated the moment it's booked, joinable from a browser with one click, no separate Zoom/Meet account required on either side. (Google Meet and Zoom stay available as connect-through options for teams standardised on them — see Integrations.)

**Bullets:**
- One-click join, browser-based, nothing to download
- Video link auto-attached to every calendar invite and reminder
- Waiting room, screen share, and call recording included

**Highlight badge:** `1-click join · 0 installs`

**Mockup spec:** A browser-chrome frame (three window dots, address bar reading `meet.snaarp.me/priya-marcus`) containing a video call UI: two participant tiles (avatar initials "PS" and "MW" on soft purple/blue gradients, matching existing avatar tints), a bottom control bar (mic, camera, share-screen, leave — simple line icons in rounded squares), and a small top-left `● REC 12:04` indicator in muted red with the dot pulsing (`smPulse` keyframe, already defined sitewide). A secondary small card beside it shows the *originating* booking confirmation with a "Join meeting" button glowing/highlighted to visually connect the two states — "this is what got you here."

---

### 3.3 — Unlimited Meetings

**Tab rail:** Icon: infinity. Label: **Unlimited Meetings**. Teaser: *"No caps. Ever. Even on Free."*

**Panel headline:** Book your first meeting or your ten-thousandth. Same price.

**Body:** Some tools throttle you once you're actually using the product — a meeting cap that quietly nudges you toward upgrading. SnaarpMe doesn't do that. Every plan, including Free, carries unlimited 1:1 meetings, so growth in usage is never the thing that forces an upgrade decision.

**Bullets:**
- No monthly meeting limit on any plan, including Free
- No "you're approaching your limit" warnings
- Upgrade only when you need *more features* — never just more volume

**Highlight badge:** `∞ meetings · every plan`

**Mockup spec:** A simple, confident data visual rather than a busy UI: a large `Liberation Mono` counter that increments (scripted count-up on scroll-into-view, e.g. `0 → 1,248` over ~1.4s, eased) labelled "Meetings booked this month," with a thin horizontal capacity bar underneath rendered as **fully unfilled/borderless** (no ceiling) next to the label `No limit` in `#0EA47A`, deliberately contrasted against a small greyed-out reference bar labelled "Typical free-plan cap" that IS full — a quiet, factual dig without naming a competitor.

---

### 3.4 — Team Scheduling & Round-Robin

**Tab rail:** Icon: users. Label: **Team Scheduling**. Teaser: *"One queue. No double-bookings, no manual routing."*

**Panel headline:** Route meetings to the right person, automatically.

**Body:** Coordinate across a whole team with round-robin routing and collective availability — inbound requests get assigned by rotation, load, or priority, panel interviews find the one window every interviewer shares, and anyone out-of-office is skipped without anyone having to remember to reassign them.

**Bullets:**
- Round-robin by rotation, current load, or set priority
- Collective availability for multi-person panels
- Out-of-office automatically skips a rep — no manual reassignment

**Highlight badge:** `Zero manual routing`

**Mockup spec:** Reuse the existing round-robin queue visual style from the current Row 3 (ranked list with "Next up" badge, call-count subtext, greyed "Out of office" row) but extend it with a small animated hand-off: on tab activation, a new "New booking request" card slides in from the top, pauses briefly over the queue, then a subtle arrow/line draws down to the "Next up" person as a confirmation strip fades in beneath — `Assigned to Marcus · Tue 15 Sep, 14:00`, echoing the existing success-state visual language.

---

### 3.5 — Automated Workflows

**Tab rail:** Icon: bolt/workflow. Label: **Automation**. Teaser: *"Set it once. It runs every time."*

**Panel headline:** Every meeting gets the same care, without anyone lifting a finger.

**Body:** Reminders, confirmations, and follow-ups fire on their own schedule — email and SMS before the call, a follow-up after it, and a no-show recovery sequence if someone doesn't turn up. Build the workflow once per meeting type; it applies to every booking from then on.

**Bullets:**
- Email + SMS reminders on a schedule you set
- Automatic follow-ups after the meeting, not before
- No-show recovery sequences, reusable across the team

**Highlight badge:** `Runs itself · 24/7`

**Mockup spec:** Reuse the existing vertical workflow-builder visual (trigger block → connected steps with toggle switches) exactly as already built for Row 4, but add one more step at the bottom that is currently absent from the page: a "No-show detected → send recovery message" step, toggled **on** here (in contrast to the current homepage's "Off" state) to demonstrate the fuller automation story this section is making.

---

## 4. Section-Level CTA (below the tab dashboard)

**Micro-copy:**
> Every feature above is available from Free. No feature paywall, no "contact sales" wall.

**Button:** `Get started free` (primary, `#6D28D9`, same style as hero CTA) + secondary text link `See full feature comparison →` pointing to the pricing page.

---

## 5. Copy tone notes

- Every bullet leads with the *capability*, not the mechanism — "no double-bookings" before "round-robin routing," because the section has to sell before it explains.
- Avoid unverifiable superlatives ("the best," "the fastest") — the existing site is careful about this (see the flagged placeholder-stats warning on the homepage doc); this section should stay in the same register: specific, demonstrable claims only.
- The "Unlimited Meetings" tab's comparison bar must stay competitor-unnamed, consistent with the existing factual (non-attack) comparison table already on the page.
- Keep each panel body to 2–3 sentences max — the mockup should be doing half the persuading, not the paragraph.

---

## 6. Cut from the original 7 (kept in reserve, not built)

- **Custom Booking Pages & Branding** — real value, but overlaps with the existing "Booking Links" deep-dive row already on the homepage; cut here to avoid duplicating content elsewhere on the same page.
- **Insights & Analytics** — real value, but overlaps with the existing "Live Dashboard Showcase" section already on the homepage; cut here for the same reason.
- Both can be reinstated later (e.g. on a dedicated Product page) without rewriting — the content above is preserved in version history of this doc if needed.

---

## 7. Open items before build

- Confirm whether native video calling (3.2) is a shipped feature or aspirational — flag this the same way the homepage doc flagged Stripe payments and round-robin as needing confirmation. If not yet shipped, either reframe as "Video-ready" (integrates with Zoom/Meet, no native room) or hold this tab back from launch.
- Confirm "Unlimited meetings on Free" (3.3) is actually true of current plan limits before shipping the claim — this is the single most load-bearing sentence in the section.
- Decide section placement: standalone new section, or a replacement for the existing 4-row feature deep-dive (recommend replacement, since this section supersedes it in depth and is more persuasive per pixel of scroll).
