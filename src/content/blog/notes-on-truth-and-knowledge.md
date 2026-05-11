---
title: "Notes on Truth and Knowledge: A Working Framework"
publishDate: 2026-05-11
excerpt: "A working framework for assigning truth values across analytic, falsifiable synthetic, and unfalsifiable synthetic propositions — and why the AI moment makes this question acute."
tags: ["epistemology", "philosophy", "ai"]
---

## Why I bother with this

I came to epistemology somewhat backwards. I started as a physics and CS person who basically thought science could answer any real question, and the rest was either confused or unimportant. At some point I realized that view was self-undermining — the commitments that make science work aren't themselves scientific — and that scientism leaves a huge class of consequential questions homeless.

The AI moment makes this acute. Questions about machine consciousness, moral status, what these systems actually understand — these aren't empirically decidable, but we're going to make decisions about them with massive stakes regardless. A culture without a working methodology for unfalsifiable-synthetic questions will make those decisions badly. So this isn't armchair philosophy for me — it's a response to what I think is a real and worsening problem with how the dominant educated-person epistemology handles questions outside its comfort zone.

What follows is a working framework. It's still in iteration, and I'll flag the places where I'm least settled.

## The starting move: deflationism plus pragmatism about assignment

Truth is a label that we assign to propositions. I take a roughly deflationary view here — truth isn't a substantive metaphysical property; calling something "true" is closer to endorsing it than to attributing some special quality. We can conceive of truth in different ways, and the interesting question isn't "which is the real definition" but "which assignment methods are useful for which kinds of propositions, and useful for what?"

There's a tension in this stance that I want to flag upfront: I'm deflationist about truth itself but I'll end up using something like correspondence theory as my assignment procedure for synthetic empirical claims. I don't think this is incoherent — it's deflationism about the metaphysics of truth combined with pragmatism about which assignment functions to use for which jobs — but it is a seam, and I'm not fully settled on whether it holds up under maximum pressure.

## Three rough categories of propositions

I split propositions into three categories, with different assignment methods appropriate to each:

1. **Analytic propositions** — true if they can be derived from definitions, axioms, or structural rules of the language/system in question.
2. **Empirically falsifiable synthetic propositions** — true if they correspond with reality, where "correspondence" gets cashed out via observation, prediction, and the methodology of conjecture-and-falsification (with help from Bayesian/MDL machinery).
3. **Unfalsifiable synthetic propositions** — substantive claims about reality that empirical methods can't decide. These get evaluated by a messier set of criteria: logical consistency, parsimony, brute-fact reduction, abductive fit, hard-to-vary explanatory structure, and broader coherence.

A note on the categories themselves: Quine's "Two Dogmas of Empiricism" is a real critique of the analytic/synthetic distinction, and I take it seriously. He's right that you can't draw a perfectly sharp line — the concept of synonymy can't be defined non-circularly without already invoking analyticity, and on a holist picture all beliefs face experience together rather than one at a time. I'm not committed to the distinction being a deep metaphysical joint in nature. I'm using it as a useful coarse-graining for organizing different truth-assignment strategies. Even on a holist picture, mathematical truths and empirical generalizations have very different revisability profiles in practice — the categories are tracking that practical difference, not asserting a foundational divide.

## Analytic propositions

For analytic propositions, derivation does the work. "2+2=4" is analytic and derivable from the Peano axioms. "All bachelors are unmarried" is analytic and derivable from the definition of a bachelor. The derivation process is theory-laden and rests on axioms of logic — which I'll come back to, because the question of where those axioms get their status is genuinely live.

Some propositions don't sort cleanly until they're broken down or further explicated. Language is imperfect at latching onto clean propositional structure, and I think a fair amount of philosophical confusion comes from forcing crisp categorization onto sentences that mix multiple kinds of claims.

## Empirically falsifiable synthetic propositions

For synthetic propositions, I'll start with the empirically falsifiable ones, which I think are the cleanest case.

"All swans are white" is synthetic. It's true if all swans are, in fact, white. Can we *know* this without seeing all the swans in the world? No — and more generally, we can't have certainty about the external world, full stop, given the limits of perception and cognition. But we can still assign a truth value with limited information, and the question is how to do it well.

The naive procedure is enumerative induction: I've seen many white swans and no non-white ones, so I conjecture that all swans are white. Hume's problem is the obvious objection: this can't be non-circularly justified. Any defense of induction either appeals to logic (but it's not a logical truth — no contradiction in the sun failing to rise) or to past success of induction (which uses induction to justify induction).

I want to be careful here, because I used to say something looser — that falsification "dissolves" the problem of induction. It doesn't. Popper himself didn't claim that, and the standard objections are right: falsification smuggles induction back in, both because we still need to assume our observations generalize and because we still prefer corroborated theories for action, which is induction in disguise.

The honest version of the position is this: Hume's problem doesn't go away. What falsification gives us is a methodology that doesn't require solving it. We hold conjectures tentatively, make risky predictions, and discard theories when reality pushes back. That's not a solution to Hume — it's a way of doing inquiry that takes Hume seriously, treating induction as a load-bearing commitment we make for pragmatic reasons rather than something we've justified. Working empirical inquiry just *is* induction held tentatively, with falsification as the structural feature that keeps it honest.

For theory selection among non-falsified candidates, I lean on Bayesian and MDL (minimum description length) machinery. If you assign 0 to white swans and 1 to non-white swans and graph time vs observation, the MDL-optimal conjecture for an all-white history is the constant function — it's more compressible than alternatives that would predict a future shift. This generalizes: given multiple non-falsified theories, prefer the one with the shortest joint description of theory and data.

But MDL is itself an inductive bet. "Simpler hypotheses are more likely true" isn't a logical truth — it's a meta-inductive commitment. So the formal machinery doesn't escape the regress; it makes the inductive commitment cleaner and more explicit, which is the most we can ask for.

## What grounds the empirical methodology?

This is the question that took me the longest to sit with: the falsifiable-synthetic category I just described rests on commitments that are themselves not falsifiable. The reliability of empirical observation, the existence of an external world, the broad regularity of causation, the principle of induction itself — these are foundational commitments that empirical inquiry can't validate without circularity.

I think the right move is to recognize that these commitments are themselves unfalsifiable synthetic propositions, but ones so foundational and so well-supported by the criteria for that category (which I'll lay out shortly) that we treat them as starting points rather than conclusions. Reasoning about the empirical world basically can't get started without them. They're the price of admission for doing empirical inquiry at all.

This means there's no clean separation between my second and third categories — the second category rests on axioms held in the third. I think this is true of every empirical epistemology and not a flaw unique to mine, but it's worth being explicit about.

## Unfalsifiable synthetic propositions

The third category is where I've spent the most time and where I'm least settled.

There's a temptation to reject all unfalsifiable synthetic propositions as meaningless or unimportant, in the spirit of logical positivism. I think this is technically a valid stance but unsatisfying — it does away with most of metaphysics, teleology, and large parts of history (any historical interpretation that goes beyond what's strictly recoverable through new evidence is operating with empirically unfalsifiable propositions). And the verificationist principle that grounds the rejection — "only empirically verifiable claims are meaningful" — is itself not empirically verifiable. The position is self-undermining.

The truth values we assign to unfalsifiable synthetic propositions clearly matter. They give people purpose and meaning. They establish virtues and ethics. They power communities, cultures, ideologies, and historical zeitgeists. Some are also self-evidently axiomatic — the external world exists, I exist, some conception of causality holds. So some method is needed for adjudicating them, even if it can't be as clean as falsification.

The criteria I currently use, in roughly the order I trust them:

**Logical consistency.** A proposition that contradicts itself or generates contradictions when worked out doesn't survive. The classical tensions in the omni-God concept (omnipotence + omniscience + omnibenevolence + the existence of suffering) are an example — they pose real consistency challenges that have to be addressed or accepted as cost.

**Parsimony.** All else equal, prefer explanations that postulate fewer entities or mechanisms. The simulation hypothesis fails badly here — it adds an entire substrate of unobservable simulators with no explanatory payoff. "We live in a matrix" worked in fiction because escape was possible; in reality, the hypothesis offers nothing beyond the appearance of depth, and rejecting it is cheaper. Polytheism-to-monotheism was, in part, parsimony optimization.

**Brute-fact reduction.** Prefer explanations that minimize the number of brute facts — true synthetic propositions with no specified causal, structural, or teleological explanation. The values of fundamental physical constants are often pointed to as brute facts that some theistic positions claim to reduce. The extreme correspondence between mental and physical states is a near-infinite set of brute facts under naive dualism, which is part of why dualism has trouble. Reducing brute facts is closely related to parsimony but distinct: parsimony asks how many things you postulate; brute-fact reduction asks how many of the things you postulate are themselves unexplained.

**Abductive fit.** The proposition should be consistent with what's already known, and ideally inferable as the best explanation of available evidence. If I claim millions died in a war and we have records of only several hundred, I need a serious story for the discrepancy. If I claim everything that exists is physical, I need a story for the Hard Problem of consciousness — either showing the problem isn't real, or that it can be resolved within physicalism.

**Hard-to-vary explanatory structure.** This is a recent addition I'm adopting from David Deutsch — a good explanation is one where the components constrain each other, where you can't swap out parts without breaking the explanation's ability to account for what it's explaining. Deutsch's example: the Persephone myth of the seasons is easy to vary (swap the goddess, the underworld, the duration — the "explanation" still works in the loose sense of accounting for seasons) while the axial-tilt explanation is hard to vary (change the angle, the orbital geometry, the heating physics, and the explanation breaks). I think this captures something real that my earlier coherence criterion was reaching for, more rigorously. It also overlaps with brute-fact reduction: easy-to-vary explanations have arbitrary parameters that are themselves brute facts. I haven't fully worked out how it composes with the other criteria — possibly it sharpens or partially replaces coherence rather than sitting alongside it.

**Coherence.** I'm keeping this, but in a narrower form than before. With hard-to-vary doing the work of "are the parts mutually constraining," coherence becomes more about how a proposition fits into broader frameworks of understanding — interpretability, holistic fit with adjacent commitments, the aesthetic of unified explanation. I'll admit this is the criterion I trust least and that I haven't fully separated from aesthetic preference. I think aesthetic preferences may be doing some real epistemic work — pattern-recognition for what kinds of explanations have historically been productive — but I'm not confident the defense holds up, and I'd flag it as my weakest commitment.

These criteria don't compose algorithmically. They sometimes conflict, and there's irreducible judgment in how to weight them in any given case. The framework isn't an oracle; it's a set of pressures.

## Some worked cases

**The simulation hypothesis.** Easy to vary (swap the simulators, motivations, depths), no explanatory payoff, adds enormous unverifiable machinery. Parsimony, brute-fact reduction, and hard-to-vary all cut against. Reject.

**The God question.** Harder. Parsimony cuts against, but explanatory power and the role of meaning push back. Many religious traditions claim privileged access to the divine through revelation, which I can't dismiss on parsimony alone given how much explanatory and existential work the proposition does. My move here is to *constrain* rather than reject — strip the male-God claim (no work being done), strip the omni-paradoxes (consistency cost too high), and see what conception remains. Polytheism-to-monotheism was a similar move historically. I don't think the framework forces a unique answer here, but it constrains the space of defensible positions much more than naive theism or naive atheism would suggest.

**AI consciousness.** This is the live case for me. Whether current or near-future AI systems are conscious is empirically undecidable — there's no consciousness-meter, and behavioral evidence is consistent with many underlying ontologies. The question goes in the unfalsifiable-synthetic category. Parsimony cuts against attributing rich inner experience absent independent evidence. Abductive fit is mixed: behavior alone doesn't compel consciousness attribution, but our theories of consciousness are weak enough that we can't rule it out either. Hard-to-vary cuts against most popular accounts on either side. The honest position is that the question is genuinely open and the criteria don't decide it — which is itself important, because the stakes are high enough that "we don't know" needs to be held seriously rather than shrugged off.

## The normative question

Where do normative propositions fit? I haven't settled this and I want to flag it as an unresolved tension in the framework.

The two candidate locations:

1. **Analytic** — derivable from foundational definitions or axioms about goodness, suffering, agency, etc.
2. **Axiomatic synthetic** — substantive claims about value held foundationally, in the same category as "the external world exists" and "induction is reliable."

I've been leaning analytic, partly because of Frege-Geach: normative sentences embed in logical structures the same way truth-apt sentences do (conditionals, disjunctions, propositional attitudes), which is hard to explain on a non-cognitivist view that denies they have truth values at all. But the foundational commitments — "suffering is bad," "agency matters" — don't feel definitional in the way "bachelors are unmarried" feels definitional. They feel more like substantive claims we hold by fiat because moral reasoning can't get started without them.

Maybe the distinction between "analytic" and "axiomatic synthetic held by fiat" doesn't survive close inspection — Quine would say it doesn't — and what I'm gesturing at is the same kind of foundational commitment in either case. I haven't worked it through.

## Where this leaves me

The framework is meant to do something specific: it forces the question "what *kind* of question is this?" before "what's the answer?" That reframing alone changes how you act. Treating ethics as if it were empirical, or treating empirical questions as if they were matters of taste, are common failure modes. The taxonomy guards against them.

It's not a foundationally justified system — I don't think any epistemology is — but it's an honest attempt to think through how to assign credence across the actual range of questions that come up, including the messy ones the dominant scientism would prefer to ignore. The third category is where the live action is, especially as we face decisions about AI, machine consciousness, alignment, and what these systems are or aren't. We're going to be tested on those questions, ready or not.

## TL;DR

Truth is a label on propositions. The interesting question is which assignment methods are useful for which kinds. Three rough categories:

- **Analytic**: derive from axioms/definitions/logic.
- **Falsifiable synthetic**: science, conjecture-and-falsification, MDL/Bayesian machinery — all resting on inductive commitments we hold pragmatically because Hume's problem isn't solvable.
- **Unfalsifiable synthetic**: messier — logical consistency, parsimony, brute-fact reduction, abductive fit, hard-to-vary explanatory structure, coherence.

The categories aren't crisp (Quine is right about that), the second rests on commitments held in the third, and the criteria for the third don't compose algorithmically. But the framework forces the right first question — *what kind of claim is this?* — and that's worth a lot in practice.

## Open threads (where I'm least settled)

- The deflationism/correspondence seam — am I really holding both, or is one secretly doing all the work?
- The relationship between "unfalsifiable synthetic propositions evaluated by criteria" and "axiomatic synthetic propositions held by fiat" — I think they collapse into each other but I haven't proven it to myself.
- How hard-to-vary composes with the other criteria — supplement, sharpen, or partially replace coherence?
- Whether normative propositions are analytic or axiomatic synthetic, and whether that distinction even survives.
- Whether coherence (in its narrow, aesthetic-leaning form) earns its place at all, or whether it's doing work that the other criteria already cover.
