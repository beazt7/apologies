import type { SiteContent } from '../types/content';

/**
 * ============================================================================
 * SITE CONTENT, the single place to personalize this site.
 * ============================================================================
 * Everything a site owner needs to change, names, the apology text, memories,
 * and commitments, lives in this file. You should not need to edit any
 * component to customize the experience further.
 * ============================================================================
 */
export const siteContent: SiteContent = {
  herName: 'Aamu',
  hisName: 'Kunjuo',

  // Short, decorative marginalia shown beside sections on wide screens. Purely visual.
  marginNotes: {
    apology: 'plainly said',
    accountability: 'no soft words',
    commitments: 'shown, not said',
    memories: 'still real',
    letter: 'in his words',
    wayForward: 'what now',
    closing: 'no dramatics',
  },

  opening: {
    eyebrow: 'For Aamu',
    heading: 'Aamu, I owe you an honest apology.',
    body: "This isn't asking anything of you. There's no timer, no catch, nothing you need to do right now. Read it now, read it later, or not at all, and any of those is fine.",
    readyButtonLabel: 'Read when you\u2019re ready',
    leaveButtonLabel: 'Leave this page',
    // Replace with any neutral destination if desired.
    leaveUrl: 'https://www.google.com',
  },

  apology: {
    heading: 'The apology',
    intro: 'No conditions. No excuses. Just what happened, what it meant, and what I understand about the weight of it.',
    sections: [
      {
        id: 'what-happened',
        heading: 'What I did',
        body: [
          "I cheated on you with my ex, and then I lied to you about it. Not once, and not by accident. I made that choice again every time I let you believe something that wasn't true.",
          "Every one of those lies was its own decision. I don't want it to blur into one vague mistake in your head, because it wasn't one mistake. It was many, made on purpose, each time I had the chance to tell you the truth and chose not to.",
        ],
      },
      {
        id: 'the-harm',
        heading: 'The harm this caused',
        body: [
          "I broke the trust this relationship was built on, and I did it in the way that's hardest to come back from: being unfaithful, and then lying to protect myself instead of being honest with you.",
          "I made you doubt things you should never have had to question, your own read on a situation, where I actually was, what I told you. That's the specific damage I caused, and I'm not going to describe it in softer terms than that.",
        ],
      },
      {
        id: 'no-excuses',
        heading: 'No excuses',
        body: [
          "There's no stress, no distance, no misunderstanding between us that makes any of this okay. I'm not going to explain it in a way that quietly shifts even a little of the blame off myself.",
          "Whatever was going on with me at the time is mine to work through. It was never a reason to cheat, and it was never a reason to keep lying to you afterward. Those were choices, and they were mine alone.",
        ],
      },
      {
        id: 'what-you-chose',
        heading: 'What you\u2019ve chosen to do',
        body: [
          "You didn't have to give this another chance, and I know that. Choosing to stay doesn't mean the hurt stopped counting, and I'm not going to treat it like it did.",
          "I'm not reading your choice to stay as forgiveness I've already earned, or as this being resolved. It just means I get the chance to show you, through what I actually do, that this can be different. That part is on me now.",
        ],
      },
      {
        id: 'not-asking',
        heading: 'What I\u2019m not asking for',
        body: [
          "I'm not asking you to comfort me about how I feel, or to reassure me that we're okay. However you feel about this, today or some random Tuesday months from now, is allowed to just be true without you managing it for my sake.",
          "This page exists so there's an honest, complete account of what happened, from me, in my own words. Nothing more is owed to me because I wrote it.",
        ],
      },
    ],
  },

  accountability: {
    heading: 'What happened, in full',
    intro: 'This isn\u2019t meant to be easy to read, and it isn\u2019t. Open a card if you want more detail. There\u2019s no reward for it, and nothing here is hidden behind a game.',
    cards: [
      {
        id: 'what-happened',
        title: 'What happened',
        summary: 'A plain account, without softening it.',
        details: 'I cheated on you with my ex, and afterward I lied about it directly, more than once. I let you believe things that weren\u2019t true rather than risk you finding out, and I didn\u2019t come to you with it myself. That matters too.',
      },
      {
        id: 'why-wrong',
        title: 'Why it was wrong',
        summary: 'A choice, not a moment of weakness.',
        details: 'Cheating was one decision. Lying about it afterward was a whole series of separate decisions, made every time I had an opening to tell you the truth and chose silence, or a lie, instead. That\u2019s what makes this a pattern, not one bad moment I can point to as where it went wrong.',
      },
      {
        id: 'how-affected',
        title: 'How it may have affected you',
        summary: 'I don\u2019t get to decide this for you.',
        details: 'I can\u2019t know exactly what this cost you, and I\u2019m not going to guess on your behalf. It may have made you question your own judgment, your sense of safety with me, or how much you can trust what I tell you day to day, even about small things. Whatever this brought up for you, before you decided to stay and after, is valid, whether or not you\u2019ve said it out loud to me.',
      },
      {
        id: 'responsibility-now',
        title: 'What responsibility looks like now',
        summary: 'Not a one-time gesture.',
        details: 'Now that you\u2019ve chosen to stay, responsibility doesn\u2019t get lighter. If anything it means more. It means all contact with her has ended, for good, and I\u2019ll answer honestly if you ever want to know more about that. It means not expecting you to act like this is behind us just because time has passed, and not getting defensive when it comes back up, because it will, and that\u2019s fair.',
      },
    ],
  },

  commitments: {
    heading: 'Words are not proof',
    intro: 'A website can\u2019t prove that someone has changed, and neither does one hard conversation or one good month. Only consistent action, over real time, does that. These are written down so they\u2019re on record between us, not so they can stand in for the real thing.',
    transitionStatement: 'You\u2019ve chosen to give this a chance, and I\u2019m not going to treat that like the hard part is over. Nothing below is a promise that I\u2019ll be perfect. It\u2019s a list of specific things you can actually check against what I do.',
    items: [
      {
        id: 'truthfulness',
        action: 'Being fully truthful, including when it\u2019s uncomfortable or inconvenient for me',
        whyItMatters: 'Lying, not just the affair itself, was what actually broke this. Being truthful about small, boring, even embarrassing things is the baseline now, not a favor I\u2019m doing you.',
        howProgressShows: 'Answering directly when you ask me something, even if the honest answer is awkward, instead of managing what you hear so it lands easier.',
        status: 'Ongoing',
      },
      {
        id: 'boundaries',
        action: 'Respecting whatever space or boundaries you need, for as long as you need them',
        whyItMatters: 'You choosing to stay doesn\u2019t mean you owe me speed. You get to decide how we rebuild this and how fast, and that isn\u2019t something I get to rush or negotiate.',
        howProgressShows: 'Not pushing you to feel okay faster than you do, and not treating your choice to stay as the end of the conversation.',
        status: 'Ongoing',
      },
      {
        id: 'ending-contact',
        action: 'Having no contact with her, and staying transparent about that',
        whyItMatters: 'Any contact with her, even something that looks harmless, would undo everything else here. This one isn\u2019t negotiable.',
        howProgressShows: 'That contact has already ended. If you ever want details so you can feel sure of that, I\u2019ll tell you honestly, without getting defensive about being asked.',
        status: 'Ongoing',
      },
      {
        id: 'accepting-doubt',
        action: 'Accepting that your trust isn\u2019t automatically restored just because you\u2019re staying',
        whyItMatters: 'You giving this a chance isn\u2019t the same as the hurt being resolved. I\u2019m not going to act like choosing to stay means you\u2019re required to feel okay about it on any particular timeline.',
        howProgressShows: 'Not getting frustrated or impatient if trust rebuilds slower than either of us would like, and not making you justify still feeling unsure.',
        status: 'Ongoing',
      },
      {
        id: 'consistency',
        action: 'Showing up the same way on ordinary days, not just in the hard conversations',
        whyItMatters: 'Trust isn\u2019t rebuilt in one honest conversation. It\u2019s rebuilt in a hundred small, unremarkable days where nothing dramatic happens and I just keep being honest anyway.',
        howProgressShows: 'Time passing with all of this still true, especially on the days you\u2019re not paying close attention.',
        status: 'Ongoing',
      },
    ],
  },

  memories: {
    heading: 'A few memories',
    intro: 'These are here because they\u2019re true, not because they\u2019re supposed to outweigh anything above. Good memories and real harm can both be true about the same relationship, and pretending otherwise wouldn\u2019t be honest either.',
    items: [
      {
        id: 'memory-1',
        caption: 'Our trip to Kodaikanal',
        note: 'The cold mornings, the lake, being nowhere else but there with you.',
        altText: 'A photo from the Kodaikanal trip.',
        imageSrc: '/images/kodaikanal.jpg',
      },
      {
        id: 'memory-2',
        caption: 'That drive up to Valparai',
        note: 'Hairpin bends, bad phone signal, and neither of us minding at all.',
        altText: 'A photo from the Valparai trip.',
        imageSrc: '/images/valparai.jpg',
      },
      {
        id: 'memory-3',
        caption: 'The time I came to see you in Thrissur',
        note: 'A whole drive just to see your face for a few hours.',
        altText: 'A photo from Thrissur.',
        imageSrc: '/images/thrissur.jpg',
      },
      {
        id: 'memory-4',
        caption: 'The time you came all the way to Palakkad',
        note: 'You showed up anyway. I don\u2019t think I ever told you what that meant.',
        altText: 'A photo from Palakkad.',
        imageSrc: '/images/palakkad.jpg',
      },
    ],
  },

  // A few extra personal photos, shown as small fanned-out photo stacks between
  // sections. Each is clickable to view full-size, so give each one real alt text.
  ambientPhotos: {
    openingBackground: [
      { src: '/images/image1.JPG', alt: 'A photo of Aamu.' },
      { src: '/images/IMG_0512.JPG', alt: 'A scenic photo from one of our trips.' },
      { src: '/images/photo1.jpg', alt: 'A candid photo of the two of us.' },
    ],
    beforeCommitments: [
      { src: '/images/photo4.jpg', alt: 'A candid photo of the two of us.' },
      { src: '/images/photo5.jpg', alt: 'A candid photo of the two of us.' },
      { src: '/images/photo6.jpg', alt: 'A candid photo of the two of us.' },
    ],
    beforeMemories: [
      { src: '/images/image2.jpg', alt: 'A candid photo of the two of us.' },
      { src: '/images/IMG_2505.JPG', alt: 'A photo of Aamu, dressed up for the day.' },
      { src: '/images/photo2.jpg', alt: 'A candid photo of the two of us.' },
    ],
    beforeLetter: [
      { src: '/images/IMG_0792.jpg', alt: 'A candid photo of the two of us.' },
      { src: '/images/IMG_0912.jpg', alt: 'A candid photo of the two of us.' },
      { src: '/images/IMG_1269.jpg', alt: 'A candid photo of the two of us.' },
    ],
    beforeWayForward: [
      { src: '/images/IMG_1307.jpg', alt: 'A close-up candid photo of the two of us.' },
      { src: '/images/IMG_1743.jpg', alt: 'A photo of the two of us, dressed up.' },
      { src: '/images/IMG_2001.jpg', alt: 'A candid photo of the two of us.' },
    ],
    beforeClosing: [
      { src: '/images/IMG_2007.jpg', alt: 'A close-up candid photo of the two of us.' },
      { src: '/images/IMG_9161.jpg', alt: 'A candid photo of the two of us.' },
      { src: '/images/IMG_9578.jpg', alt: 'A photo of Aamu smiling in the car.' },
    ],
  },



  letter: {
    heading: 'A letter',
    intro: 'Everything above, written as one letter instead.',
    paragraphs: [
      'Aamu,',
      'I keep starting this letter and deleting it, because every version sounds like I\u2019m trying to make myself feel better, and that\u2019s not the point of this. So I\u2019m going to just say it plainly instead.',
      'I cheated on you with my ex, and then I lied to you about it, more than once, for longer than I want to admit. Not because of stress, or distance, or anything happening between us, those aren\u2019t reasons, they\u2019re just things that were also true at the time. The only reason this happened is that I made a choice, and then I made the choice to hide it, over and over.',
      'I think about the specific moments I lied to you, looked right at you and said something I knew wasn\u2019t true, and I don\u2019t have a version of that story where I come out looking like someone who just made one mistake. I made a lot of them, on purpose, and you deserved better than that from the start.',
      'I\u2019m not writing this to ask you to forgive me, or to tell me it\u2019s okay, or to make me feel less like the person who did this. You don\u2019t owe me any of that, not today, not ever, regardless of what you\u2019ve decided about us.',
      'What you\u2019ve decided is that you\u2019re willing to give this a chance. I know that wasn\u2019t owed to me, and I\u2019m not going to treat it like the situation is resolved just because you\u2019re still here. If anything, it means more is expected of me now, not less.',
      'I think about Kodaikanal, the cold mornings and how quiet it was. I think about the drive up to Valparai, and the train ride to see you in Thrissur, and you showing up in Palakkad like it was nothing, when it wasn\u2019t nothing at all. Those memories are real, and so is what I did. I\u2019m not writing this so one cancels out the other, I just don\u2019t want to pretend the good parts didn\u2019t happen either.',
      'I\u2019ve ended all contact with her, and that isn\u2019t conditional on anything, it\u2019s just something that had to happen regardless of what you decided. Going forward, I want to be someone you can ask anything and get a straight answer from, even when it\u2019s uncomfortable for me. Especially then.',
      'I\u2019m not going to promise you I\u2019ll never make another mistake, because that\u2019s not a promise anyone can actually keep, and I don\u2019t want to hand you another thing that sounds nice and turns out to be empty. What I can do is keep choosing honesty, on the ordinary days and not just the ones where it\u2019s easy, and let you see that over time instead of just hearing me say it.',
      'Thank you for the time we\u2019ve had, and thank you for staying long enough to let me try to be someone worth that. I don\u2019t take it lightly, and I\u2019m not going to forget what it cost you to make that choice.',
    ],
    signOff: 'Kunjuo',
    readAsOneLabel: 'Read as one letter',
  },

  wayForward: {
    heading: 'Where we go from here',
    intro: 'This isn\u2019t about you deciding anything else right now, you\u2019ve already told me what you want to try. This is just about being clear on what I\u2019m holding myself to as we move forward.',
    checkpoints: [
      {
        id: 'right-now',
        timeframe: 'Right now',
        description: 'All contact with her has ended. I\u2019ve told you the truth about what happened, and I\u2019m not waiting to be caught in anything else.',
      },
      {
        id: 'weeks-ahead',
        timeframe: 'In the weeks ahead',
        description: 'You get to bring this up whenever you need to, even if it\u2019s inconvenient, even if we just had a good day. I\u2019m not going to act like it\u2019s history before it feels like history to you.',
      },
      {
        id: 'months-after',
        timeframe: 'Over the months after that',
        description: 'This is where it actually gets proven or it doesn\u2019t, in ordinary moments, not big conversations. Being where I say I am, answering honestly, and not needing praise for the bare minimum of being trustworthy.',
      },
      {
        id: 'no-fixed-end',
        timeframe: 'No fixed end point',
        description: 'I\u2019m not expecting a date where this is officially behind us. If trust takes longer to rebuild than either of us would like, that\u2019s not a failure, it\u2019s just honest.',
      },
    ],
    closingNote: 'None of this is asking you to track or manage my behavior. It\u2019s on me to hold up my end, not on you to check.',
  },

  closing: {
    heading: 'Closing',
    body: [
      'I\u2019m sorry, for cheating on you and for lying about it afterward.',
      'I\u2019m not asking for credit for writing this, and I\u2019m not promising I\u2019ll be perfect from here.',
      'If anything is going to prove that I\u2019ve changed, it will be my actions, shown consistently over time, not this page, and not one letter.',
    ],
  },

  music: {
    enabledByDefault: false,
    // Add a locally hosted file (e.g. place it in /public/audio/ and reference "/audio/your-file.mp3").
    src: null,
    label: 'Optional background music',
  },
};
