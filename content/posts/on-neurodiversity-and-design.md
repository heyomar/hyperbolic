---
title: "Designing for Neurodiversity: What Psychology Taught Me About the Web"
date: "2026-02-01"
excerpt: "After spending time researching belonging and well-being among neurodiverse college students, I found myself looking at the interfaces I build differently."
tags:
  - Design
  - Psychology
---

After spending time researching belonging and well-being among neurodiverse college students, I found myself looking at the interfaces I build differently. The same principles that make a campus environment welcoming — clarity, predictability, low sensory noise — are the same principles that make a website genuinely usable.

## Clarity over cleverness

One consistent finding in neurodiversity research is that cognitive load is not distributed evenly. What feels like a light lift for a neurotypical user — parsing an ambiguous icon, inferring what a hover state means, scanning an unstructured wall of text — can be genuinely exhausting for someone with ADHD, dyslexia, or autism.

The fix is rarely dramatic. It usually means writing a label instead of relying on an icon alone, structuring content with real headings instead of just making things big and bold, and breaking long paragraphs into shorter ones with breathing room between them.

## Motion as a barrier

Scroll-triggered animations and parallax effects are everywhere in portfolio and marketing sites. They can look great in a Dribbble screenshot. In practice, for users with vestibular disorders or sensory sensitivities, they range from mildly disorienting to genuinely nausea-inducing.

The `prefers-reduced-motion` media query exists precisely for this reason. Wrapping any animation in a check for that preference takes two lines of CSS and costs nothing. Not wrapping it carries a real cost for the people it affects.

## Predictability is a feature

One thing that stood out in the qualitative data from the research was how meaningful consistent routines and predictable environments were for participants' sense of belonging. Unpredictability — not knowing what to expect next — was a recurring source of stress.

Inconsistent UI is the digital equivalent of an unpredictable environment. When links look different from page to page, when buttons that look identical do different things, when navigation moves depending on where you are — that inconsistency isn't a minor annoyance. It's friction that compounds.

A design system, even a small one, solves this. Consistent tokens, consistent components, consistent behavior. It benefits every user, but for neurodiverse users it is often the difference between a site that is usable and one that isn't.

## Where this leads

Accessibility is sometimes framed as a checklist — WCAG compliance, color contrast ratios, ARIA attributes. Those things matter. But the research reminded me that a site can pass every automated audit and still feel hostile to someone who processes the world differently.

The more useful frame is: build things that are clear, consistent, and calm. That's not a constraint on creativity. It's a higher bar.
