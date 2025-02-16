
const Article = () => {
    return (
        <div className="w-full max-w-3xl p-6 md:p-6 text-gray-900 leading-relaxed">
        <h2 id="what-are-algos" className="text-2xl font-semibold mt-2">
          What Are Algorithms?
        </h2>
        <p className="mt-2">
        At a high level, an algorithm is a set of instructions used to complete a task. We follow algorithms in everyday life—for example, making a sandwich by layering bread, meat, and cheese in a specific order. In computing, algorithms function the same way, guiding a computer through a sequence of steps to solve problems and perform tasks.
        </p>

        <p className="mt-4">
        Algorithms become increasingly complex when they gain the ability to learn and adapt on their own, a process known as artificial intelligence or machine learning. Think of the sandwhich example—you might receive feedback from someone, adjust the ingredients or technique, and refine the recipe over time. Similarly, machine learning algorithms improve by analyzing data, identifying patterns, and continuously optimizing their performance.  
        </p>

        <div className="mt-6 flex">
        <div className="bg-gray-900 w-2 rounded-l-lg"></div>
        <div className="bg-gray-100 p-4 rounded-r-lg flex-1">
        <p className="text-gray-700 text-md">
        With traditional algorithms, we define explicit rules that a computer follows to solve a problem. In contrast, deep learning models operate in a way that even their creators don’t fully understand. We train them on data, set optimization methods, and allow them to adjust their own parameters. While we can see the outputs, the decision-making process remains largely a black box. Even with interpretability techniques, we can only approximate their reasoning, not fully grasp it. This lack of transparency raises concerns about trust, bias, and accountability in AI-driven decisions.
        </p>
        </div>
        </div>
        <h2 id="engagement-algorithms" className="text-2xl font-semibold mt-6">
          Engagement Algorithms
        </h2>
        <p className="mt-2">
        Have you ever opened social media and noticed your explore page is filled with the same type of content? For me, it’s almost all UFC—almost like the algorithm knows exactly what I’m most likely to click on. This is no coincidence, rather the engagement algorithm in-action.
        </p>
        <p className="mt-2">
        These algorithms are built to maximize your time on the platform. They track your likes, comments, shares, and how long you view each post, then analyze these patterns to recommend similar content. They also experiment with new content to see what captures your interest. Over time, they become increasingly sophisticated, continuously improving their ability to keep you scrolling.
        </p>
        <p className="mt-4">
        <strong><em>The bar analogy</em></strong>
        </p>
        <p>
         Imagine a bar where the bartenders analyze your every move. They note what catches your eye, track your reactions to drinks, and subtly adjust the vibe to keep you engaged. If you perk up after a whiskey sour, they suggest similar cocktails. If deep conversations follow a few beers, they dim the lights and lower the volume.

        Over time, they predict your choices, offering drinks before you ask, creating the perfect atmosphere, and ensuring you stay longer. At first, it feels like the best bar ever. But as months pass, your nights feel compulsive, your health declines, and leaving gets harder. The bartenders weren’t just serving drinks—they were keeping you there.

        Like engagement algorithms, what started as entertainment became an addiction, designed to hold your attention at any cost.
        </p>

        <h2 id="engagement-algorithms" className="text-2xl font-semibold mt-6">
          Unintended Consequences
        </h2>
        <p className="mt-2 font-semibold"> 
        <em>If a product is free, you are the product ~ Tristian Harris</em></p>
        <p className="mt-2"> Instagram, Tik tok, Youtube, Twitter, etc. are all free to sign up. Rather than making their money upfront, these companies generate the majority of their revenue through advertising. The longer you are scrolling, the more advertisments you watch equals more money in their pockets. This business model gives a reasoning for why modern social media rely on engagement, but ethical concerns arrise with how this is achieved.
        </p>


        <p className="mt-6 italic text-gray-600">
          Stay aware. Stay intentional. Don’t let the algorithm control you.
        </p>
      </div>
    );
    };

export default Article