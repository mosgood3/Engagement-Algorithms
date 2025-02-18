
const Article = () => {
    return (
        <div className="w-full max-w-3xl p-6 md:p-6 text-gray-900 leading-relaxed">
        <h2 id="what-are-algos" className="text-2xl font-semibold mt-2">
          What Are Algorithms?
        </h2>
        <p className="mt-2">
        At a high level, an algorithm is a set of instructions used to complete a task. We follow algorithms in everyday life. For example, making a sandwich by layering bread, meat, and cheese in a specific order. In computing, algorithms function the same way, guiding a computer through a sequence of steps to solve problems and perform tasks.
        </p>

        <p className="mt-4">
        Algorithms become increasingly complex when they gain the ability to learn and adapt on their own, a process known as artificial intelligence or machine learning. Think of the sandwhich example—you might receive feedback from someone, adjust the ingredients or technique, and refine the recipe over time. Similarly, machine learning algorithms improve by analyzing data, identifying patterns, and continuously optimizing their performance.  
        </p>

        <p className="mt-4">
        With traditional algorithms, we define explicit rules that a computer follows to solve a problem. In contrast, deep learning models operate in a way that even their creators don’t fully understand. We train them on data, set optimization methods, and allow them to adjust their own parameters. While we can see the outputs, the decision-making process remains largely a <a href="https://umdearborn.edu/news/ais-mysterious-black-box-problem-explained" className="text-blue-600">black box</a>. Even with interpretability techniques, we can only approximate their reasoning, not fully grasp it. This lack of transparency raises concerns about trust, bias, and accountability in AI-driven decisions.
        </p>
        <h2 id="engagement-algorithms" className="text-2xl font-semibold mt-6">
          Engagement Algorithms
        </h2>
        <p className="mt-2">
        Have you ever opened social media and noticed your explore page is filled with the same type of content? For me, it’s almost all UFC—almost like the algorithm knows exactly what I’m most likely to click on. This is no coincidence, rather the engagement algorithm in-action.
        </p>
        <p className="mt-2">
        These algorithms are built to maximize your time on the platform. They track your likes, comments, shares, and how long you view each post, then analyze these patterns to recommend similar content. They also experiment with new content to see what captures your interest. Over time, they become increasingly sophisticated, continuously improving their ability to keep you scrolling.
        </p>
        <div className="mt-6 flex">
        <div className="bg-gray-900 w-2 rounded-l-lg"></div>
        <div className="bg-gray-100 p-4 rounded-r-lg flex-1">
        <p className="text-gray-700 text-md">
        Imagine a bar where the bartenders analyze your every move. They note what catches your eye, track your reactions to drinks, and subtly adjust the vibe to keep you engaged. If you perk up after a whiskey sour, they suggest similar cocktails. If deep conversations follow a few beers, they dim the lights and lower the volume.

        Over time, they predict your choices, offering drinks before you ask, creating the perfect atmosphere, and ensuring you stay longer. At first, it feels like the best bar ever. But as months pass, your nights feel compulsive, your health declines, and leaving gets harder. The bartenders weren’t just serving drinks—they were keeping you there.

        Like engagement algorithms, what started as entertainment became an addiction, designed to hold your attention at any cost.
        </p>
        </div>
        </div>
        <h2 id="unintended-consequences" className="text-2xl font-semibold mt-6">
          Unintended Consequences
        </h2>
        <p className="mt-2 font-semibold"> 
        <em>If a product is free, you are the product ~ Tristian Harris</em></p>
        <p className="mt-2"> Platforms like Instagram, TikTok, YouTube, and Twitter are free to use, but they generate most of their revenue through advertising. The longer users scroll, the more ads they see, directly increasing the platform’s profits. This business model explains why modern social media prioritizes engagement, but it also raises ethical concerns about how this is achieved.
        </p>
        <p className="mt-2">
        Every time we sign up for an app built around engagement, we make an unspoken agreement with the platform. In exchange for entertainment, we grant it deep insight into how our minds work. When an algorithm is designed to capture our attention, it inevitably learns the nuances of our thinking, shaping not only what we see but how we see the world. This raises privacy concerns, not just about traditional data like credit card numbers or personal details, but something far more invasive. Somewhere in a data center, a machine is plugged in, continuously refining its understanding of your desires, habits, and vulnerabilities. Now, take this for what it is; perhaps nothing more than an optimized user experience. But where does this road lead? If an algorithm can predict your actions before you make them, influence your choices without you realizing, and mold your perceptions over time, then the question is no longer just about privacy. It’s about control.
        </p>

        <p className="mt-2">
        While the control aspect of social media could lead down a dark path, for now, it remains a tool designed to capture your attention. Yet, its influence on society, especially younger generations—is undeniable. Teenagers now average 8.5 hours of screen time daily, exceeding the World Health Organization’s recommendation by 6.5 hours. What was once an escape from reality, has become the reality itself. It is no coincidence that mental health in the United States is rising concern among the youth. The platforms are engineered to keep users engaged, regardless of the type of content. They exploit our natural tendency toward negativity bias—the inclination to focus more on negative emotions and information than positive ones. If a user is drawn to content that evokes sadness or jealousy, the algorithm will prioritize such content, keeping them hooked and scrolling for longer.
        </p>
        <h2 id="escaping" className="text-2xl font-semibold mt-6">
          Escaping the Scroll
        </h2>
        <p className="mt-2">
        After understanding how social media apps truly operate, I wanted to see just how much they influenced my life. So, I deleted every social media app from my phone. Almost immediately, I found myself reaching for my phone, instinctively trying to open apps that were no longer there. It wasn’t a conscious decision to scroll; it was pure habit. This experience made me realize the true power of these algorithms—they had tapped into my subconscious, drawing me back to their platforms without me even thinking about it.

        <p className="mt-2">
        This experience was eye-opening, but I’m not suggesting we abandon social media altogether. These platforms are great for connecting with others, staying informed, and even unwinding after a long day. The key to a healthy relationship with them is to take control. Understand how they operate, recognize how they’re designed to capture your attention, and take charge of when and how you choose to engage.
        </p>
        </p>
        <p className="mt-6 italic text-gray-600">
          Stay aware. Stay intentional. Don’t let the algorithm control you.
        </p>
      </div>
    );
    };

export default Article