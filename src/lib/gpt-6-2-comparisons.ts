export const gpt62ComparisonDate = "2026-11-19";
export const gpt62ComparisonDateLabel = "November 19, 2026";

export const flashRates = {
  offPeak: { input: 0.15, cachedInput: 0.003, output: 0.60 },
  peak: { input: 0.30, cachedInput: 0.006, output: 1.20 }
};

export const gpt62Comparisons = {
  sol: {
    href: "/compare/deepseek-v4-1-flash-vs-gpt-6-2-sol",
    title: "DeepSeek V4.1 Flash vs GPT-6.2 Sol",
    description: "Compare DeepSeek V4.1 Flash and GPT-6.2 Sol for everyday coding. See API prices, a 1,000-review budget, and what to measure before choosing a model for pull-request review.",
    model: "GPT-6.2 Sol",
    modelId: "gpt-6.2-sol",
    rates: { input: 2, cachedInput: 0.10, output: 10, cacheWrite30m: 2.50, cacheWrite12h: 5 },
    frontierCode: 44.4,
    summary: "Start with DeepSeek V4.1 Flash for frequent coding tasks with clear checks, such as adding a regression test or triaging a build log. Try GPT-6.2 Sol on reviews that require more judgment. Its higher API cost is easier to justify when it catches issues your team would otherwise spend time finding or fixing.",
    taskTitle: "Which model should review a small pull request?",
    task: [
      "Say a pull request changes how a search form parses an empty query. Give both models the same diff, bug report, and tests. Ask for a failing test against the parent commit and a check that omitting the search field still behaves as expected. A plausible explanation matters less than a regression test that actually fails before the fix and passes afterward.",
      "Flash is a reasonable first pass when this is the kind of change you see all week. Give Sol the same task when the code spans form validation and API defaults, or when the critique needs to explain why an apparently harmless line changes behavior. For review comments, ask for the relevant file and an example input. That gives a maintainer something concrete to verify before opening another thread."
    ],
    example: {
      label: "Small pull-request review",
      input: 20_000,
      output: 4_000
    },
    costsTitle: "What if the team runs 1,000 reviews a month?",
    costs: [
      "At the token counts above, 1,000 requests would cost $5.40 if all Flash calls ran off-peak or $10.80 if they ran at peak rates. The same number of Sol requests would cost $80 at OpenAI Standard rates. That is a budget for one request per review. An agent that calls the model again after running tests will produce additional usage.",
      "At an assumed reviewer cost of $60 per hour, the $0.0746 difference between a Sol request and an off-peak Flash request is about 4.5 seconds of reviewer time. Use that as a break-even calculation for this example. If reviewers still spend the same time checking both sets of comments, the cheaper run has a clear advantage. If Sol avoids a false alarm that takes several minutes to investigate, the token-rate difference may be immaterial for that review.",
      "Reviews often share a long prefix with repository instructions and tool definitions. Put stable material before the changing diff and track billed cache hits and writes across runs. A fresh build log can make a request larger, and a rewrite early in the prefix can reduce cache reuse. Budget from what the API charged after a representative batch."
    ],
    benchmarkReading: "For pull-request review, the missing measurement is how many of the comments a maintainer would act on. FrontierCode evaluates work on repository changes. A separate review trial should count the known issues the model catches, the incorrect comments it adds, and how long a maintainer spends checking them.",
    workflowTitle: "Where Sol earns its place in a daily coding workflow",
    workflow: [
      {
        title: "Test Flash on repeatable work",
        text: "Pull a mix of recent PRs with a known review outcome. Include a clean change so you can see whether the model invents a problem. For reviews that found a defect, give both models the same snapshot from before the maintainer fixed it."
      },
      {
        title: "Test Sol on review and follow-up edits",
        text: "Keep the diff, instructions, and test commands the same. When you ask for an edit after the review, send both models identical feedback. Accept a patch when it fixes the specific failure, preserves behavior outside that case, and passes the relevant tests."
      },
      {
        title: "Measure the cost of an accepted result",
        text: "Record billed tokens, retries, and reviewer minutes even when a review is rejected. Divide the total cost by the number of reviews the team accepted. If Flash meets your threshold on narrow diffs, leave it on those and use Sol for changes that need a second pass."
      }
    ]
  },
  astra: {
    href: "/compare/deepseek-v4-1-flash-vs-gpt-6-2-astra",
    title: "DeepSeek V4.1 Flash vs GPT-6.2 Astra",
    description: "Compare DeepSeek V4.1 Flash and GPT-6.2 Astra for cross-service debugging. See what a 300K-token request costs and how to test an escalation workflow on real fixes.",
    model: "GPT-6.2 Astra",
    modelId: "gpt-6.2-astra",
    rates: { input: 8, cachedInput: 0.40, output: 40, cacheWrite30m: 10, cacheWrite12h: 20 },
    frontierCode: 45.4,
    summary: "Use DeepSeek V4.1 Flash to narrow down a bug when you can verify each finding against code or logs. Try GPT-6.2 Astra when the fix has to hold across service boundaries, retries, or older data. Its higher API rates make more sense on work where a wrong patch would cost substantial engineering time.",
    taskTitle: "When does a bug warrant an Astra run?",
    task: [
      "Consider an export job that sometimes sends customers two copies of a report. Start by asking Flash to trace the request from the queue producer to the worker and point to the code that marks completion. Give it the job ID and the two relevant log windows. Ask it to distinguish a duplicate queue message from a worker crash after upload but before acknowledgment.",
      "If the reproduction reaches both cases, hand Astra the trace, the queue contract, and a sample payload from the previous deployment. Ask for a fix that preserves that payload and handles both retry paths. A patch that only deduplicates writes can still leave users with two notifications. Make that a separate acceptance check."
    ],
    example: {
      label: "Cross-module debugging request",
      input: 100_000,
      output: 12_000
    },
    costsTitle: "What happens when an Astra request exceeds 272K input tokens?",
    costs: [
      "Suppose the same debugging session grows to 300,000 uncached input tokens and still uses 12,000 billed output tokens. At OpenAI's Standard long-context rates of $16 per million uncached input tokens and $60 per million output tokens, the Astra request costs $5.52. The whole request moves to the higher rate once it crosses the threshold. At the listed Flash rates, the same token counts cost $0.0522 off-peak or $0.1044 at peak.",
      "A long agent session can cross that line when it adds tool output and earlier turns to the next request. Keep the reproduction, the failing assertion, and the snippets that explain the behavior. Store full logs with the run and bring in the relevant ranges as needed. Before splitting a run, check that the smaller request still includes the facts the patch depends on, such as what the older worker expects in the payload.",
      "Track both billing and wall-clock time on retries. A single patch can involve several requests and test runs. Use the billed totals to compare an Astra-first workflow with a Flash-first workflow that escalates only after a failed acceptance check."
    ],
    benchmarkReading: "Those scores are relevant when the work resembles a repository patch. For the export bug, run a test that interrupts the worker after upload, retries the same job, and checks the number of deliveries. Then run an older payload through the updated worker. The benchmark score gives no result for those two specific checks.",
    workflowTitle: "When to pay for an Astra run",
    workflow: [
      {
        title: "Use Flash to gather the evidence",
        text: "Require a file reference and a log entry for each suspected cause. Save the smallest command or test that reproduces the issue. If that evidence also points to a one-module fix, give Flash a patch attempt with the same regression checks."
      },
      {
        title: "Use Astra when the fix crosses boundaries",
        text: "Escalate when the fix changes a contract shared by the producer and worker, or when Flash's patch still fails after a retry. Give Astra the failed test output as well as the reproduction so it can see which assumption broke. Keep the original acceptance criteria."
      },
      {
        title: "Track escalation and review time",
        text: "Start both variants from the same revision and give them the same tools and review criteria. Record which changes pass the retry and compatibility checks, how many rounds they take, and how much reviewer time they use. If your queue changes are the expensive failures, keep that task group separate from simpler edits when comparing the totals."
      }
    ]
  }
};

export type Gpt62Comparison = (typeof gpt62Comparisons)[keyof typeof gpt62Comparisons];
