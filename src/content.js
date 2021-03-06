export default {
  'zh-CN': {
    lang: 'zh-CN',
    introTitle: '在你开始之前...',
    introOne:
      '<p> 首先，虽然我们为了中文用户的方便提供了中文的表单，但在填写时请<strong>尽量使用英文</strong>。NaiveUI 社区不只有中国人。如果你想让尽可能多的人能够看懂你的 issue，就请尽量用英文。如果担心表达不清楚，可以同时提供中文内容。</p> <p>其次，NaiveUI 及其相关库的 issue 列表只接受 bug 报告或是新功能请求 (feature requests)。这意味着我们不接受用法问题。如果你开的 issue 不符合规定，它将会被<strong>立刻关闭</strong>。</p>',
    introTwo:
      "对于使用中遇到的问题，请使用以下资源：<p> <strong> > </strong> 仔细阅读文档：<a href='https://www.naiveui.com'>NaiveUI</a> </p> <p> <strong> > </strong> 提问前确保你在 <a href='https://www.naiveui.com/zh-CN/os-theme/docs/common-issues'>常见问题</a> 和 <a href='https://www.naiveui.com/zh-CN/os-theme/docs/changelog'>更新日志</a> 中搜索过 </p> <p> 最后，在开 issue 前，可以先搜索一下以往的旧 issue —— 你遇到的问题可能已经有人提了，也可能已经在最新版本中被修正。注意：如果你发现一个已经关闭的旧 issue 在最新版本中仍然存在，请不要在旧 issue 下面留言，而应该用下面的表单开一个新的 issue。 </p>",
    explainTitle: '为什么要有这么严格的 issue 规定？',
    explain:
      "维护开源项目是 <a href='https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/'>非常辛苦的工作</a> 。随着 NaiveUI 在社区越来越受欢迎，我们每天都在收到越来越多的问题、bug 报告、功能需求和 Pull Requests。作为一个完全免费使用的开源项目，NaiveUI 项目的维护人手是有限的。这意味着想要让项目长期的可持续发展，我们必须：<p> 1. 给予更具体的工作更高的优先级（比如 bug 的修复和新功能的开发）。<br> 2. 提高 issue 处理的效率。</p> <p>针对 (1)，我们决定将 GitHub issue 列表严格地限制用于有具体目标和内容的工作。问题和讨论应当发送到更适合它们的场合。</p> <p>针对 (2)，我们发现影响 issue 处理效率的最大因素是用户在开 issue 时没有提供足够的信息。这导致我们需要花费大量的时间去跟用户来回沟通，只为了获得一些基本信息好让我们对 issue 进行真正的分析。这正是我们开发这个 app 的理由：我们要确保每个新 issue 都提供了必需的信息，这样能节省维护者和开发者双方的时间。</p> <p>最重要的是，请明白一件事：开源项目的用户和维护者之间并不是甲方和乙方的关系，issue 也不是客服。在开 issue 的时候，请抱着一种『一起合作来解决这个问题』的心态，不要期待我们单方面地为你服务。</p>",
    repoSelectHint: '选择要提交 issue 的库',
    repos: [
      {
        name: 'naive-ui',
        github: 'TuSimple/naive-ui',
        npm: 'naive-ui',
      },
    ],
    issueTypesHint: 'Issue 类别',
    issueTitleHint: 'Issue 标题',
    issueTypes: [
      { label: 'Bug', value: 'Bug' },
      { label: '新功能', value: 'New' },
    ],
    versionRepositoryHint: '项目版本',
    versionVueHint: 'Vue版本',
    versionBrowserHint: '浏览器及其版本',
    versionSystemHint: '系统及其版本',
    versionNodeHint: 'Node版本（可选）',
    firstTip: '请检查在最新项目版本中能否重现此 issue。',
    reproduceHint: '重现链接',
    secondTip:
      '重现链接：请提供一个尽可能精简的 CodePen、CodeSandbox 或是提供一个 GitHub 仓库的链接。请不要乱填一个链接，那只会让你的 issue 被直接关闭。',
    reproduceHintSamll: '什么是最小化重现，为什么这是必需的？',
    reproduceTitle: '关于重现',
    reproduceExplain:
      '所谓『重现』，就是一段可以运行并展示一个 bug 如何发生的代码。',
    reproduceExplainTitleOne: '文字是不够的',
    reproduceExplainParagraphOne:
      '如果你遇到一个问题，但是只提供了一些文字描述，我们是不可能修复这个 bug 的。首先，文字在描述技术问题时的表达难度和不精确性；其次，问题的真实原因有很多可能，它完全有可能是一个你根本没有提及的因素导致的。重现是唯一能够可靠地让我们理解问题本质的方式。',
    reproduceExplainTitleTwo: '重现必须是可运行的',
    keyWords: '截图和视频不是重现。',
    reproduceExplainParagraphTwo:
      '它们仅仅证明了 bug 的存在，但却不能提供关于 bug 是如何发生的信息。只有可运行的代码提供了完整的上下文，并让我们可以进行真正的 debug 而不是空想和猜测。当然，在提供的重现的前提下，视频或是 gif 动画可以帮助解释一些比较难用文字描述的交互行为。',
    reproduceExplainTitleThree: '重现应当尽量精简',
    reproduceExplainParagraphThree:
      '有些用户会直接给我们一整个项目的代码，然后希望我们帮忙找出问题所在。此类请求我们通常不予接受，因为：<br><strong> > </strong> 你对你的项目的代码结构可能已经非常熟悉，但我们并不是。阅读、运行、分析一个完全陌生的项目是极其耗费时间和精力的。<br><strong> > </strong> 由于涉及了大量业务代码，问题可能是你的代码错误，而不是所使用库的 bug 所导致的。<br>一个最小化的重现意味着它精确地定位了 bug 本身 - 它应当只包含能够触发 bug 的最少量的代码。你应当尽可能地剔除任何跟该 bug 无关的部分。',
    reproduceExplainTitleFour: '如何提供一个重现',
    reproduceExplainParagraphFour:
      '提供一个尽可能精简的 CodePen、CodeSandbox 或是提供一个 GitHub 仓库的链接',
    stepsHint: '重现步骤',
    thirdTip:
      '重现步骤：打开重现后，我们需要执行哪些操作才能让 bug 出现？简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在。请清晰的描述重现该 issue 的步骤，没有清晰重现步骤的 issue 将不会被修复。标有 \' need reproduction \' 的 issue 如果在 7 天内不提供相关步骤，将直接被关闭。',
    expectHint: '期望的结果是什么',
    actualHint: '实际的结果是什么',
    remarks: '补充说明（可选）',
    fourthTip: '补充说明：可以是遇到这个 bug 的业务场景、上下文等信息。',
    preview: '预览',
    valid: {
      repo: '请选择库名',
      title: '请填写 issue 标题',
      type: '请选择 issue 类别',
      versionRepository: '请选择项目的版本',
      versionVue: '请选择Vue版本',
      versionBrowser: '请填写浏览器及其版本',
      versionSystem: '请填写系统及其版本',
      reproduce: '请填写重现链接',
      steps: '请填写重现步骤',
      expected: '请填写期望的结果',
      actual: '请填写实际的结果',
      functionContent: '请填写这个功能解决的问题',
      functionalExpectations: '请填写你期望的 API',
    },
    loadingText: '加载中',
    noMatchText: '无匹配数据',
    noDataText: '无数据',
    dialog: {
      title: 'Issue 预览',
      button: '创建',
    },
    functionContent: '这个功能解决了什么问题',
    functionContentTip:
      '这个功能解决了什么问题：请尽可能详尽地说明这个需求的用例和场景。最重要的是：解释清楚是怎样的用户体验需求催生了这个功能上的需求。NaiveUI 的一个重要设计原则是保持 API 的简洁和直接。通常来说，我们只考虑添加在现有的 API 下无法轻松实现的功能。新功能的用例也应当足够常见。',
    functionalExpectations: '你期望的 API 是怎样的',
    functionalExpectationsTip:
      '你期望的 API 是怎样的：描述一下你期望这个新功能的 API 是如何使用的，并提供一些代码示例。',
  },
  'en-US': {
    lang: 'en-US',
    introTitle: 'Before You Start...',
    introOne:
      '<p> The issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, <strong>it will be closed immediately</strong>.</p>',
    introTwo:
      "For usage questions, please use the following resources:<p> <strong> > </strong> Read the introduce and components documentation: <a href='https://www.naiveui.com'>NaiveUI</a> </p> <p> <strong> > </strong> Make sure you have search your question in <a href='https://www.naiveui.com/en-US/os-theme/docs/common-issues'>FAQ</a> and <a href='https://www.naiveui.com/en-US/os-theme/docs/changelog'>changelog</a>.</p> <p> Also try to search for your issue - it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.</p>",
    explainTitle: 'Why are we so strict about this?',
    explain:
      "Maintaining open source projects, especially popular ones, is <a href='https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/'>hard work</a>. As NaiveUI's user base has grown, we are getting more and more usage questions, bug reports, feature requests and pull requests every single day. As a free and open source project, NaiveUI also has limited maintainer bandwidth. That means the only way to ensure the project's sustainability is to:<p> 1. Prioritize more concrete work (bug fixes and new features).<br> 2. Improve issue triaging efficiency.</p> <p>For (1), we have decided to use the GitHub issue lists exclusively for work that has well-defined, actionable goals. Questions and open ended discussions should be posted to mediums that are better suited for them.</p> <p>For (2), we have found that issues that do not provide proper information upfront usually results in terribly inefficient back-and-forth communication just to extract the basic information needed for actual triaging. This is exactly why we have created this app: to ensure that every issue is created with the necessary information, and to save time on both sides.</p>",
    repoSelectHint: 'I am opening an issue for',
    repos: [
      {
        name: 'naive-ui',
        github: 'TuSimple/naive-ui',
        npm: 'naive-ui',
      },
    ],
    issueTypesHint: 'This is a',
    issueTitleHint: 'Issue title',
    issueTypes: [
      { label: 'Bug', value: 'Bug' },
      { label: 'Feature Request', value: 'New' },
    ],
    versionRepositoryHint: 'Version',
    versionVueHint: 'Vue Version',
    versionBrowserHint: 'Browser and its version',
    versionSystemHint: 'System and its version',
    versionNodeHint: 'Node Version (optional)',
    firstTip: 'Check if the issue is reproducible with the latest stable version.',
    reproduceHint: 'Link to minimal reproduction',
    secondTip:
      'Link to minimal reproduction: provide a streamlined CodePen / CodeSandbox or GitHub repository link as much as possible. Please don\'t fill in a link randomly, it will only close your issue directly.',
    reproduceHintSamll: 'What is a minimal reproduction, and why is it required?',
    reproduceTitle: 'About Reproductions',
    reproduceExplain:
      'A bug reproduction is a piece of code that can run and demonstrate how a bug can happen.',
    reproduceExplainTitleOne: 'Text is not enough',
    reproduceExplainParagraphOne:
      'It\'s impossible to fix a bug from mere text descriptions. First, it\'s very difficult to precisely describe a technical problem while keeping it easy to follow; Second, the real cause may very well be something that you forgot to even mention. A reproduction is the only way that can reliably help us understand what is going on, so please provide one.',
    reproduceExplainTitleTwo: 'A repro must be runnable',
    keyWords: 'Screenshots or videos are NOT reproductions! ',
    reproduceExplainParagraphTwo:
      'They only show that the bug exists, but do not provide enough information on why it happens. Only runnable code provides the most complete context and allows us to properly debug the scenario. That said, in some cases videos / gifs can help explain interaction issues that are hard to describe in text.',
    reproduceExplainTitleThree: 'A repro should be minimal',
    reproduceExplainParagraphThree:
      'Some users would give us a link to a real project and hope we can help them figure out what is wrong. We generally do not accept such requests because: <br> <strong> > </strong> You are already familiar with your codebase, but we are not. It is extremely time-consuming to hunt a bug in a big and unfamiliar codebase. <br> <strong> > </strong> The problematic behavior may very well be caused by your code rather than by a bug in NaiveUI. <br>A minimal reproduction means it demonstrates the bug, and the bug only. It should only contain the bare minimum amount of code that can reliably cause the bug. Try your best to get rid of anything that aren\'t directly related to the problem.',
    reproduceExplainTitleFour: 'How to create a repro',
    reproduceExplainParagraphFour:
      'provide a streamlined CodePen / CodeSandbox or GitHub repository link as much as possible.',
    stepsHint: 'Step to reproduce',
    thirdTip:
      'Step to reproduce: After the replay is turned on, what actions do we need to perform to make the bug appear? Simple and clear steps can help us locate the problem more quickly. Please clearly describe the steps of reproducing the issue. Issues without clear reproducing steps will not be repaired. If the issue marked with \' need reproduction \' does not provide relevant steps within 7 days, it will be closed directly.',
    expectHint: 'What is expected',
    actualHint: 'What is actually happening',
    remarks: 'Any additional comments (optional)',
    fourthTip: 'Any additional comments: some background/context of how you ran into this bug.',
    preview: 'Preview',
    valid: {
      repo: 'This is required!',
      title: 'This is required!',
      type: 'This is required!',
      versionRepository: 'This is required!',
      versionVue: 'This is required!',
      versionBrowser: 'This is required!',
      versionSystem: 'This is required!',
      reproduce: 'This is required!',
      steps: 'This is required!',
      expected: 'This is required!',
      actual: 'This is required!',
      functionContent: 'This is required!',
      functionalExpectations: 'This is required!',
    },
    loadingText: 'loading',
    noMatchText: 'No matching data',
    noDataText: 'No data',
    dialog: {
      title: 'Issue Preview',
      button: 'Create',
    },
    functionContent: 'What problem does this feature solve',
    functionContentTip:
      'What problem does this feature solve: Explain your use case, context, and rationale behind this feature request. More importantly, what is the end user experience you are trying to build that led to the need for this feature? An important design goal of NaiveUI is keeping the API surface small and straightforward. In general, we only consider adding new features that solve a problem that cannot be easily dealt with using existing APIs (i.e. not just an alternative way of doing things that can already be done). The problem should also be common enough to justify the addition.',
    functionalExpectations: 'What does the proposed API look like',
    functionalExpectationsTip:
      'What does the proposed API look like: Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use Markdown to format your code blocks.',
  },
};
