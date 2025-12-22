// data.js

// Mapping of book names to BLB codes
const bookMap = {
  'Genesis': 'gen', 'Exodus': 'exo', 'Leviticus': 'lev', 'Numbers': 'num', 'Deuteronomy': 'deu',
  'Joshua': 'josh', 'Judges': 'jdg', 'Ruth': 'ruth', '1 Samuel': '1sam', '2 Samuel': '2sam',
  '1 Kings': '1ki', '2 Kings': '2ki', '1 Chronicles': '1ch', '2 Chronicles': '2ch',
  'Ezra': 'ezra', 'Nehemiah': 'neh', 'Esther': 'esth', 'Job': 'job', 'Psalm': 'psa',
  'Proverbs': 'pro', 'Ecclesiastes': 'ecc', 'Song of Solomon': 'sng', 'Isaiah': 'isa',
  'Jeremiah': 'jer', 'Lamentations': 'lam', 'Ezekiel': 'ezek', 'Daniel': 'dan',
  'Hosea': 'hos', 'Joel': 'joel', 'Amos': 'amos', 'Obadiah': 'obad', 'Jonah': 'jonah',
  'Micah': 'mic', 'Nahum': 'nah', 'Habakkuk': 'hab', 'Zephaniah': 'zeph', 'Haggai': 'hag',
  'Zechariah': 'zech', 'Malachi': 'mal', 'Matthew': 'matt', 'Mark': 'mark', 'Luke': 'luke',
  'John': 'john', 'Acts': 'acts', 'Romans': 'rom', '1 Corinthians': '1cor', '2 Corinthians': '2cor',
  'Galatians': 'gal', 'Ephesians': 'eph', 'Philippians': 'phil', 'Colossians': 'col',
  '1 Thessalonians': '1thess', '2 Thessalonians': '2thess', '1 Timothy': '1tim', '2 Timothy': '2tim',
  'Titus': 'titus', 'Philemon': 'phm', 'Hebrews': 'heb', 'James': 'jas', '1 Peter': '1pet',
  '2 Peter': '2pet', '1 John': '1john', '2 John': '2john', '3 John': '3john', 'Jude': 'jude',
  'Revelation': 'rev'
};

// BLB link generator
export const blbLink = (ref) => {
  const [bookPart, versePart] = ref.split(/ (?=\d)/); // Split "Psalm 19:1-2"
  const bookCode = bookMap[bookPart.trim()];
  if (!bookCode) return '#'; // fallback
  const [chapter, verse] = versePart.split(':');
  return `https://www.blueletterbible.org/esv/${bookCode}/${chapter}/${verse}/s_1`;
};

// Catechisms (first 10)
export const catechisms = [
  {
    id: 1,
    question: "Who is the first and best of beings?",
    answer: "The Lord God is the first and best of beings.",
    mainScripture: `“Thus saith the LORD the King of Israel, and his Redeemer the LORD of hosts; I am the first, and I am the last; and beside me there is no God.” — Isaiah 44:6`,
    otherScriptures: [
      { ref: "Exodus 20:1-3", link: blbLink("Exodus 20:1-3") },
      { ref: "1 Samuel 2:2", link: blbLink("1 Samuel 2:2") },
      { ref: "Psalm 8:1", link: blbLink("Psalm 8:1") },
      { ref: "Psalm 96:4", link: blbLink("Psalm 96:4") },
      { ref: "Psalm 97:9", link: blbLink("Psalm 97:9") }
    ],
    explanation: "The Lord God of the Bible is the creator and sovereign ruler of all things. As such, He is Holy like no other and deserves to be revered, worshiped and obeyed.",
    expandedExplanation: [
      `To deepen our understanding of this foundational truth, let's unpack what it means for God to be "the first and best of beings" in a way that honors the full counsel of Scripture. What we think about God isn't just an abstract idea—it's foundational to our faith.`,
      `First, consider what "first" reveals about God. This points to God's aseity—He is self-existent, depending on nothing and no one for His being. Unlike everything else in creation, which derives its existence from something prior, God has no beginning. He is the uncaused Cause, the eternal "I AM" (Exodus 3:14). Isaiah 44:6 echoes this by declaring Him "the first and the last," emphasizing that history begins and ends with Him. There's no "before" God, no rival who predates Him. This guards against idolatry (as in Exodus 20:1-3), reminding us that nothing can claim first place in our hearts.`,
      `Now, turn to "best," which highlights God's supremacy and infinite perfections. God is not merely better than others but the standard of all goodness, holiness, and excellence. Psalms like 96:4 and 97:9 proclaim Him "greatly to be praised" and "most high over all the earth," not because He's in competition but because He alone possesses attributes like omniscience, omnipotence, and immutability in perfect measure. Hannah's words in 1 Samuel 2:2—"There is none holy like the LORD; there is none besides you"—underscore His uniqueness. He's not "best" by comparison to flawed alternatives; He defines what "best" means. This ties into God's sovereignty: As Creator and Ruler (Genesis 1:1; Colossians 1:16-17), He governs all things for His glory, including our salvation through Christ alone (Ephesians 1:11).`,
      `This isn't just doctrinal; it's doxological (worship-focused) and practical. It undergirds the Solas of the Reformation: Scripture alone reveals this God, grace alone draws us to Him, faith alone unites us, Christ alone mediates, and all to God's glory alone. Without this foundation, our faith crumbles into self-reliance or despair. Yet it is liberating: Knowing God as first frees us from anxiety about the future (He's already there), and as best, it invites trust in His providence over our plans. Let this truth not just inform minds but transform lives into places where God is first and best in word, deed, and affection.`
    ]
  },
  {
    id: 2,
    question: "Who is God?",
    answer: "God is a Spirit who is infinite, eternal and unchangeable in His being, wisdom, power, holiness, justice, goodness and truth.",
    mainScripture: `“God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?” — Numbers 23:19`,
    otherScriptures: [
      { ref: "Exodus 34:6-7", link: blbLink("Exodus 34:6-7") },
      { ref: "Psalm 89:14", link: blbLink("Psalm 89:14") },
      { ref: "Psalm 90:2", link: blbLink("Psalm 90:2") },
      { ref: "John 4:24", link: blbLink("John 4:24") },
      { ref: "1 Timothy 1:17", link: blbLink("1 Timothy 1:17") },
      { ref: "James 1:17", link: blbLink("James 1:17") },
      { ref: "Revelation 4:8", link: blbLink("Revelation 4:8") }
    ],
    explanation: "What does it mean that God is infinite? That there is no limit to how great he is! What does it mean that he is eternal? That he never had a beginning and will never have an ending. He is the creator and sustainer of everyone and everything.",
     expandedExplanation: [
      `God is a Spirit (John 4:24). He is not material, composed of parts, or limited by a body. As pure Spirit, He is invisible, immaterial, and present everywhere in His wholeness. This distinguishes Him from all created things and from the idols of the nations, which are mere images fashioned by human hands. Because He is Spirit, true worship must be in spirit and truth, not tied to places or forms, but offered from the heart in accordance with His revealed Word.`,
      `God is infinite, eternal, and unchangeable. These three attributes together describe the perfection and majesty of His being. To say He is infinite is to affirm that there are no bounds to His greatness—His presence fills all space yet is not contained by it, His knowledge comprehends all things past, present, and future, and His power knows no limit. To say He is eternal is to declare that He transcends time altogether: He has no beginning and no end (Psalm 90:2), existing ever the same before the mountains were brought forth. To say He is unchangeable—immutable—is to confess that God is not subject to growth, decline, mood, or alteration. What He is today, He has always been and ever will be (James 1:17; Numbers 23:19). There is no shadow of turning in Him; His purposes stand forever, and His promises are yea and amen in Christ.`,
      `These perfections extend to all His attributes. His wisdom is infinite, seeing the end from the beginning and ordering all things with flawless counsel (Psalm 147:5). His power is infinite, upholding the universe by the word of His might. His holiness is infinite, eternal, and unchangeable—set apart in perfect purity, thrice-holy (Revelation 4:8). His justice is perfect and unwavering, the foundation of His throne (Psalm 89:14), rendering to every creature according to truth. His goodness and truth are boundless and unchanging: He is the overflowing fountain of all that is truly good, and every word He speaks is faithful forever (Exodus 34:6-7; 1 Timothy 1:17).`,
      `Together, these truths reveal a God who is utterly self-sufficient, wholly independent, and gloriously perfect in Himself. He needs nothing from creation, yet in His infinite goodness He freely sustains all things and has revealed Himself to us in grace. This doctrine humbles us—there is no searching out His understanding fully—yet it also comforts us deeply: the God who saves us is not fickle, weak, or distant, but the unchanging Rock whose steadfast love endures forever. It calls forth awe, trust, and adoration. Let this truth not just inform minds but transform lives into places where God is feared, loved, and obeyed as the infinite, eternal, and unchangeable Spirit who alone is worthy of eternal praise.`
    ]
  },
  {
    id: 3,
    question: "Is there more than one God?",
    answer: "There is only one true and living God.",
    mainScripture: `“For great is the Lord, and greatly to be praised; he is to be feared above all gods. For all the gods of the peoples are worthless idols, but the Lord made the heavens.” — Psalm 96:4-5`,
    otherScriptures: [
      { ref: "Exodus 20:1-6", link: blbLink("Exodus 20:1-6") },
      { ref: "Deuteronomy 6:4", link: blbLink("Deuteronomy 6:4") },
      { ref: "Jeremiah 10:10", link: blbLink("Jeremiah 10:10") }
    ],
    explanation: "There are many things such as physical or personal idols, or even angels and demons which can be and have been called “gods”, but they are not true or living. Only one God is living and true; the God of the Bible.",
     expandedExplanation: [
      `Scripture everywhere affirms the absolute oneness of God. The Shema of Israel declares, “Hear, O Israel: The LORD our God, the LORD is one” (Deuteronomy 6:4). This is not merely numerical oneness but the declaration that Yahweh alone is God—there is no other. The first commandment forbids having any gods beside or before Him (Exodus 20:1-6), because to place anything alongside Him is to deny His unique deity. Psalm 96:4-5 contrasts the greatness of the Lord, who is to be feared above all so-called gods, with the reality that “all the gods of the peoples are worthless idols.” These idols—whether carved images, celestial bodies, spirits, or human inventions—possess no life, no power, no true divinity. The Lord alone “made the heavens,” proving His supremacy as the sole Creator.`,
      `Only the God revealed in Scripture is the true and living God. Jeremiah 10:10 proclaims, “But the LORD is the true God; he is the living God and the everlasting King.” False gods are lifeless fabrications, unable to speak, act, or save. Angels, though mighty, are created beings who veil their faces before His throne. Demons, though real spiritual entities, are fallen creatures under His sovereign judgment. Human rulers or heroes may be called “gods” in a derivative sense (as in Psalm 82), but they are mortal and accountable to the one true Judge. No creature, no force, no principle shares the essence or authority that belongs to God alone. He alone possesses life in Himself, eternally existent in perfect triune communion—Father, Son, and Holy Spirit—yet one in being and undivided in glory.`,
      `These truths establish strict and unmistakable picture of God through the Scriptures from Genesis to Revelation. There never has been, is not now, and never will be more than one God. This doctrine guards the church against every syncretism that would blend the worship of Yahweh with the worship of others, and it exposes every counterfeit that offers salvation, meaning, or power apart from Him. Yet it also magnifies the wonder of His grace: the one true and living God has not left Himself distant but has revealed Himself, entered into covenant with His people, and accomplished redemption through the incarnate Son. This oneness assures us that there is no conflict in the divine will, no rival power that can thwart His purposes, and no divided loyalty required of His worshipers. It calls us to exclusive devotion, wholehearted trust, and unceasing praise to the one God who alone is worthy. Let this truth not just inform minds but transform lives into places where the one true and living God is feared, loved, and obeyed without rival.`
    ]
  },
  {
    id: 4,
    question: "How many persons are in the Godhead?",
    answer: "There are three persons in the Godhead: the Father, the Son and the Holy Spirit; these three are one God, the same in essence, equal in power and glory.",
    mainScripture: `“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” — 2 Corinthians 13:14`,
    otherScriptures: [
      { ref: "Matthew 28:19", link: blbLink("Matthew 28:19") },
      { ref: "John 1:1", link: blbLink("John 1:1") },
      { ref: "John 10:30", link: blbLink("John 10:30") },
      { ref: "John 20:28", link: blbLink("John 20:28") },
      { ref: "1 Corinthians 8:6", link: blbLink("1 Corinthians 8:6") },
      { ref: "Hebrews 1:3", link: blbLink("Hebrews 1:3") }
    ],
    explanation: "When speaking of the trinity, we use the word “Godhead” because it is incorrect to say that there are three persons in God. Nor can we say there are three Gods. Instead, we acknowledge that there is one God with three distinct persons with special roles in creation and redemption. These are important distinctions to us because there is nothing more important than correctly knowing and understanding our Lord God.",
     expandedExplanation: [
      `The doctrine of the Godhead reveals the profound mystery of God's eternal being as one divine essence subsisting in three distinct persons: the Father, the Son, and the Holy Spirit. Within this singular divine nature, the three persons are eternally coexistent, each fully possessing the undivided essence of deity without division or separation. The Father is not the Son, the Son is not the Holy Spirit, and the Holy Spirit is not the Father; they are distinguished by their personal relations and roles in creation, providence, and redemption.`,
      `In terms of essence, the three persons share identical attributes, being infinite, eternal, unchangeable, and perfect in holiness, wisdom, power, and love (Psalm 90:2; Malachi 3:6; James 1:17). The Son, as the radiance of the Father's glory and the exact imprint of his nature, upholds all things by his word of power (Hebrews 1:3), demonstrating his equality with the Father (John 5:18; Philippians 2:6). The Holy Spirit, proceeding from the Father and the Son, searches the depths of God and imparts divine wisdom (1 Corinthians 2:10-11; John 15:26), revealing his full deity and coequality. Their unity is not merely functional but ontological, as seen in the baptismal formula where the name—singular— of God is invoked in the three persons (Matthew 28:19). This sameness in essence ensures that there are no degrees of divinity; each person is wholly God, yet there is only one God, avoiding any hint of tritheism or subordination in being.`,
      `Their equality in power and glory is manifest in the works of God, where the Father plans, the Son executes, and the Holy Spirit applies, all in perfect harmony. For instance, in creation, the Father speaks, the Word (the Son) creates, and the Spirit hovers over the waters (Genesis 1:1-3; John 1:1-3; Colossians 1:16). In redemption, the Father sends the Son, who accomplishes salvation, and the Spirit regenerates and seals believers (John 3:16; Ephesians 1:13-14; Titus 3:5-6). This triune communion reflects an eternal fellowship of love, where the persons glorify one another (John 17:1, 4-5, 24), inviting us into the divine life.`,
      `Contemplating this glorious Godhead moves us to adoration, for in the three persons we behold the inexhaustible richness of God's self-revealing love, transforming our worship into a participation in the eternal dance of divine joy and compelling us to live in unity, humility, and mission as reflections of his triune nature.`
    ]
  },
  {
    id: 5,
    question: "How do we know there is a God?",
    answer: "The light of nature in man (natural reason, the innate sense of God, our conscience, etc.), and the works of God, plainly declare that there is a God; but his Word (the Scriptures) and the Holy Spirit only, do effectually reveal him unto us for our salvation.",
    mainScripture: `“The heavens declare the glory of God, and the sky above proclaims his handiwork. Day to day pours out speech, and night to night reveals knowledge.” — Psalm 19:1-2`,
    otherScriptures: [
      { ref: "Romans 1:18-20", link: blbLink("Romans 1:18-20") },
      { ref: "1 Corinthians 1:21-24", link: blbLink("1 Corinthians 1:21-24") },
      { ref: "2 Timothy 3:15", link: blbLink("2 Timothy 3:15") }
    ],
    explanation: "Natural knowledge (the conscience of man and the visible works of God) is evidence enough for us all to be accountable to honor and worship the Lord our God. Spiritual knowledge is possessed only by those whose natural blindness has been overcome by the Spirit of God (1 Cor 2:14-15).",
     expandedExplanation: [
      `The existence of God is evident through general revelation, where the innate light of nature within humanity and the majestic works of creation unmistakably proclaim his reality, power, and divine nature (Romans 1:19-20; Psalm 19:1-2). This natural knowledge, imprinted on every conscience, renders all people without excuse, as it stirs an awareness of a supreme being to whom we owe allegiance and worship (Acts 17:27-28). Yet, this revelation, while sufficient for accountability, falls short of imparting saving knowledge, as sin darkens the mind and suppresses the truth in unrighteousness (Romans 1:18; Ephesians 4:18).`,
      `True knowledge of God for salvation comes solely through special revelation: his Word and Spirit working effectually in the heart. The Scriptures, as the written testimony of God's self-disclosure, unveil his character, will, and redemptive plan, but apart from the illuminating work of the Holy Spirit, they remain veiled (1 Corinthians 2:9-10, 14; 2 Corinthians 3:14-18). The Spirit, as the divine agent of regeneration, opens blind eyes and renews the mind, enabling faith in the gospel (John 3:5-8; Titus 3:5). This effectual revelation centers on Christ, whom no one knows except as the Father reveals him through the Spirit (Matthew 11:27; 16:17), leading to a personal encounter with God that transforms the soul.`,
      `Thus, while the heavens declare God's glory and the conscience bears witness to his law, only the harmonious testimony of Word and Spirit—convicting of sin, illuminating truth, and assuring adoption—brings sinners into fellowship with the living God (John 16:8-15; 2 Timothy 3:15-17). This progression from general to special revelation underscores God's sovereignty in salvation, where he graciously overcomes human rebellion to draw us to himself.`,
      `Beholding the God who reveals himself both in creation's splendor and Scripture's clarity fills us with awe, stirring hearts to praise the One who seeks and saves the lost, and urging lives marked by gratitude, obedience, and proclamation of his saving truth.`
    ]
  },
  {
    id: 6,
    question: "What is the Word of God?",
    answer: "The scriptures of the Old and New Testaments, being given by divine inspiration, are the word of God, the only infallible instruction of faith and practice.",
    mainScripture: `“The law of the Lord is perfect, reviving the soul; the testimony of the Lord is sure, making wise the simple; the precepts of the Lord are right, rejoicing the heart; the commandment of the Lord is pure, enlightening the eyes.” — Psalm 19:7-8`,
    otherScriptures: [
      { ref: "Isaiah 8:20", link: blbLink("Isaiah 8:20") },
      { ref: "Matthew 5:17-18", link: blbLink("Matthew 5:17-18") },
      { ref: "2 Timothy 3:16", link: blbLink("2 Timothy 3:16") },
      { ref: "2 Peter 1:21", link: blbLink("2 Peter 1:21") }
    ],
    explanation: "“Scriptures” is a special word for the writings of the Old and New Testaments. “Infallible” means it will never lead us astray in what it teaches. It can be trusted. “Faith” refers to right thinking and feeling; and “practice” refers to right doing.",
     expandedExplanation: [
      `The Word of God comprises the Holy Scriptures of the Old and New Testaments, divinely inspired in their entirety as the breathed-out revelation from God himself (2 Timothy 3:16; 2 Peter 1:20-21). This inspiration ensures that every word, penned by human authors under the superintendence of the Holy Spirit, carries divine authority without error, making the Bible the sole infallible rule for faith and practice (Psalm 119:89; Isaiah 40:8). Infallibility here denotes not merely historical accuracy but the unerring guidance in all matters of doctrine, ethics, and devotion, as the Scriptures revive the soul, impart wisdom, and enlighten the understanding (Psalm 19:7-8).`,
      `As the foundation for faith—what we believe about God, ourselves, and the world—the Word shapes our orthodoxy, grounding convictions in truths such as God's sovereignty, humanity's fall, and Christ's atonement (Romans 10:17; Hebrews 4:12). For practice, it directs orthopraxy, prescribing holy living through commands, examples, and principles that conform us to God's will (James 1:22-25; 2 Peter 1:3-4). The unity of the Testaments reveals a progressive unfolding of redemption: the Old foreshadowing Christ in types and promises (Luke 24:27; Hebrews 1:1-2), the New fulfilling them in his person and work (Matthew 5:17-18; 2 Corinthians 1:20). No other source—tradition, reason, or experience—can supplant this divine instruction, as all must be tested against Scripture's standard (Isaiah 8:20; Acts 17:11).`,
      `The Spirit's role in inspiration extends to illumination, enabling believers to grasp and apply the Word's depths (1 Corinthians 2:13; John 16:13). Thus, the Bible stands as God's living voice, piercing hearts and equipping for every good work (Hebrews 4:12; 2 Timothy 3:17).`,
      `Meditating on and actively studying this sacred Word draws us into profound reverence for the God who speaks, igniting worship that exalts his faithfulness and propels us toward transformed lives of holiness, service, and unswerving devotion to his truth.`
    ]
  },
  {
    "id": 7,
    "question": "What do the Scriptures mainly teach?",
    "answer": "The scriptures are the written divine revelation of the story of God, whereby we learn about our creator, His purposes, His plans for His creation and His work of redemption.",
    "mainScripture": "“All scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.” — 2 Timothy 3:16-17",
    "otherScriptures": [
      { "ref": "John 5:39", "link": blbLink("John 5:39") },
      { "ref": "Romans 10:14-17", "link": blbLink("Romans 10:14-17") },
      { "ref": "Galatians 3:8", "link": blbLink("Galatians 3:8") }
    ],
    "explanation": "The holy scriptures contain 66 books, have 40 different authors and were written over a period of 1600 years in 3 different languages. Through the guiding of the Holy Spirit the authors wrote of their experiences and revelations concerning God. These texts give us a picture of the self-authenticating glory of God. When they were written, they were perfectly inerrant, and even today the message remains pure.",
     expandedExplanation: [
      `The Scriptures principally unfold the grand narrative of God's self-revelation, illuminating His character as the sovereign Creator and Redeemer. They declare that all Scripture is breathed out by God, originating from His very essence and thus carrying divine authority and sufficiency (2 Timothy 3:16-17). This divine origin ensures that the Bible is not a mere human compilation but the living word through which God communicates His eternal purposes, from the creation of the heavens and the earth to the consummation of all things in Christ.`,
      `In revealing God as our Creator, the Scriptures portray Him as the self-existent One who spoke the universe into being, endowing it with order and purpose (Genesis 1:1; Psalm 33:6-9). They teach of His immutable attributes—His holiness, justice, mercy, and love—demonstrating that He is not distant but intimately involved in His creation, sustaining it by His powerful word (Hebrews 1:3). Furthermore, the Bible expounds God's redemptive plan, tracing the thread of salvation from the protoevangelium in Eden (Genesis 3:15) through the covenants with Abraham, Moses, and David, culminating in the new covenant in Christ's blood (Jeremiah 31:31-34; Hebrews 8:6-13).`,
      `The Scriptures also delineate God's purposes for humanity, calling us to know Him, love Him, and reflect His glory. They instruct in righteousness, reproving sin, correcting error, and training in godliness, equipping believers for every good work. Through the gospel proclaimed therein, sinners are drawn to faith, as the word preached brings life and transformation (Romans 10:14-17; John 5:39). The unity of Scripture, despite its diverse authorship across centuries, attests to its divine inspiration, with every part harmonizing to point to Christ as the fulfillment of God's promises (Galatians 3:8; Luke 24:27).`,
      `In beholding the Scriptures' teaching, our hearts are stirred to worship the God who has so graciously revealed Himself, leading us to treasure His word as a lamp to our feet and a light to our path (Psalm 119:105). This divine revelation transforms us, renewing our minds and conforming us to the image of Christ, that we might live for His glory in obedience and joy.`
    ]
  },
  {
    "id": 8,
    "question": "How do we know that the Bible is the Word of God?",
    "answer": "The Bible evidences itself to be God’s Word by the heavenliness of its doctrine, the unity of its parts, and its power to convert sinners and to edify saints. But only the Spirit of God can make us willing to agree and submit to the Bible as the Word of God.",
    "mainScripture": "“The law of the Lord is perfect, reviving the soul; the testimony of the Lord is sure, making wise the simple; the precepts of the Lord are right, rejoicing the heart; the commandment of the Lord is pure, enlightening the eyes; the fear of the Lord is clean, enduring forever; the rules of the Lord are true, and righteous altogether.” — Psalm 19:7-9",
    "otherScriptures": [
      { "ref": "John 16:13-14", "link": blbLink("John 16:13-14") },
      { "ref": "Acts 10:43", "link": blbLink("Acts 10:43") },
      { "ref": "Acts 18:28", "link": blbLink("Acts 18:28") },
      { "ref": "Romans 15:4", "link": blbLink("Romans 15:4") },
      { "ref": "1 Corinthians 2:13-16", "link": blbLink("1 Corinthians 2:13-16") }
    ],
    "explanation": "“Heavenliness” refers to the fact that the teachings of Scripture are of such a nature that they cannot be explained by mere human resources. The “unity of its parts” refers to the way that the whole of scripture points to Christ.",
     expandedExplanation: [
      `The Bible attests to its own divine authority through intrinsic evidences that compel recognition of its heavenly origin. Foremost is the heavenliness of its doctrine, which transcends human wisdom, offering truths about God's holiness, human sinfulness, and the path to eternal life that no mere philosophy could conceive (Psalm 19:7-9). These teachings revive the soul, impart wisdom to the simple, rejoice the heart, and enlighten the eyes, demonstrating a purity and power that originate from the divine mind (1 Corinthians 2:13-16).`,
      `The unity of its parts further evidences its divine authorship, as the Scriptures, composed over millennia by diverse human writers, cohere in a singular narrative centered on God's redemptive work in Christ. From Genesis to Revelation, the Bible unfolds a consistent storyline of creation, fall, redemption, and restoration, with prophecies fulfilled, types shadowed, and promises kept, all pointing to Jesus as the Messiah (John 5:39; Acts 10:43). This remarkable harmony, amidst cultural and linguistic diversity, cannot be attributed to human contrivance but reflects the overseeing hand of the Holy Spirit (2 Peter 1:20-21).`,
      `Moreover, the Bible's power to convert sinners and edify saints marks it as God's word, piercing the heart, convicting of sin, and producing faith and holiness where human words fail (Hebrews 4:12; Romans 15:4). It transforms lives, turning rebels into worshipers and equipping believers for perseverance and growth in grace (Acts 18:28; James 1:21). Yet, while these evidences are compelling, it is ultimately the internal testimony of the Holy Spirit that persuades the soul to submit to Scripture's authority, illuminating its truth and overcoming natural resistance (John 16:13-14; 1 Corinthians 2:10-12).`,
      `Contemplating these evidences draws us into profound adoration of the God who has spoken so clearly and powerfully, inspiring us to yield our lives to His word, that it might dwell richly in us, shaping our thoughts, words, and deeds for His eternal praise.`
    ]
  },
  {
    "id": 9,
    "question": "What are the decrees of God?",
    "answer": "The decrees of God are his eternal purpose, according to the counsel of his will, whereby for his own glory, he has foreordained whatsoever comes to pass.",
    "mainScripture": "“for I am God, and there is no other; I am God, and there is none like me, declaring the end from the beginning and from ancient times things not yet done, saying, ‘My counsel shall stand, and I will accomplish all my purpose,’” — Isaiah 46:9-10",
    "otherScriptures": [
      { "ref": "Psalm 115:3", "link": blbLink("Psalm 115:3") },
      { "ref": "Daniel 4:35", "link": blbLink("Daniel 4:35") },
      { "ref": "Amos 3:6", "link": blbLink("Amos 3:6") },
      { "ref": "Romans 11:36", "link": blbLink("Romans 11:36") },
      { "ref": "Ephesians 1:11", "link": blbLink("Ephesians 1:11") }
    ],
    "explanation": "God’s decrees are his own plans and purposes for history, and they always happen. He did not consult with anyone else. He thought it all up. They are eternal. Meaning there never was a time when he didn’t know what he was going to do. And all his plans were made to maximize the display of his glory.",
     expandedExplanation: [
      `God's decrees encompass His eternal, unchanging purposes, ordained according to the counsel of His own will for the manifestation of His glory. These decrees are not reactive but flow from God's aseity—His self-existence and independence—declaring the end from the beginning with unerring certainty (Isaiah 46:9-10). As the sovereign Lord, He foreordains all events, from the vast movements of history to the minutest details, ensuring that nothing occurs outside His wise design (Ephesians 1:11; Romans 11:36).`,
      `In these decrees, God's immutability shines forth, as His plans are eternal, existing before time began, without alteration or shadow of change (Psalm 33:11; James 1:17). He consults no one, for His counsel is perfect and self-sufficient, rooted in His infinite wisdom and goodness (Psalm 115:3; Daniel 4:35). Whether in acts of mercy or judgment, all serves to display His attributes—His justice in condemning sin, His grace in redeeming the elect, and His power in upholding creation (Amos 3:6; Proverbs 16:4).`,
      `The scope of God's decrees includes whatsoever comes to pass, affirming His comprehensive sovereignty over good and evil, prosperity and adversity, without making Him the author of sin (Job 1:21-22; Genesis 50:20). This foreordination harmonizes with human responsibility, as God's purposes are accomplished through means, including the free actions of creatures, all bending to His ultimate will (Acts 4:27-28; Philippians 2:13).`,
      `Reflecting on God's decrees evokes awe at His majestic sovereignty, humbling us before His throne and stirring trust in His benevolent rule. This truth transforms our perspective, fostering contentment in trials and gratitude in blessings, as we live coram Deo—before the face of God—seeking to align our wills with His for the praise of His glorious grace.`
    ]
  },
  {
    "id": 10,
    "question": "How does God accomplish his decrees?",
    "answer": "God accomplishes his decrees in his works of creation and providence.",
    "mainScripture": "“Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.” — Revelation 4:11",
    "otherScriptures": [
      { "ref": "Genesis 1:1", "link": blbLink("Genesis 1:1") },
      { "ref": "Proverbs 16:9", "link": blbLink("Proverbs 16:9") },
      { "ref": "Proverbs 16:33", "link": blbLink("Proverbs 16:33") },
      { "ref": "Proverbs 19:21", "link": blbLink("Proverbs 19:21") },
      { "ref": "Proverbs 20:24", "link": blbLink("Proverbs 20:24") },
      { "ref": "Proverbs 21:1", "link": blbLink("Proverbs 21:1") },
      { "ref": "Proverbs 21:31", "link": blbLink("Proverbs 21:31") },
      { "ref": "Matthew 5:45", "link": blbLink("Matthew 5:45") },
      { "ref": "Matthew 6:26", "link": blbLink("Matthew 6:26") },
      { "ref": "Acts 14:17", "link": blbLink("Acts 14:17") }
    ],
    "explanation": "Our God did not create the world and then leave it alone. He does not sit back and watch when it comes to his creation, but rules over the world he has created. He preserves and governs all his creatures and their actions.",
     expandedExplanation: [
      `God executes His eternal decrees through His works of creation and providence, bringing to pass all that He has foreordained for His glory. In creation, God actualizes His purposes by bringing all things into existence from nothing, by the word of His power, establishing the foundation for His redemptive plan (Revelation 4:11; Genesis 1:1). This act displays His infinite wisdom, power, and goodness, as the heavens declare His glory and the earth reveals His handiwork (Psalm 19:1; Romans 1:20).`,
      `Providence extends God's decretive will into the ongoing governance of creation, where He preserves and directs all things according to His sovereign counsel. He upholds the universe moment by moment, sustaining life and order, from the sparrow's fall to the king's heart (Matthew 10:29-30; Proverbs 21:1). In providence, God works all things together for good to those who love Him, orchestrating events—both ordinary and miraculous—to fulfill His purposes (Romans 8:28; Genesis 45:5-8).`,
      `This accomplishment includes God's common grace, extending kindness to all creatures, sending rain on the just and unjust, and restraining evil to preserve society (Matthew 5:45; Acts 14:17). Yet, in special providence, He advances His redemptive decree, guiding history toward the consummation in Christ, where every knee will bow (Philippians 2:10-11; Ephesians 1:9-10). Through means like human choices, natural laws, and divine interventions, God's will prevails without coercion, maintaining creaturely accountability (Proverbs 16:9, 33; 19:21).`,
      `Meditating on how God accomplishes His decrees fills us with wonder at His meticulous care and unassailable authority, drawing us to worship Him as the Alpha and Omega. This doctrine renews our faith, encouraging reliance on His providential hand in every circumstance, that we might walk in humility and obedience, glorifying Him in all we do.`
    ]
  },
  {
    "id": 11,
    "question": "What are God’s works of providence?",
    "answer": "God’s works of providence are the holy, wise and powerful acts by which he preserves and governs all his creatures, and all their actions.",
    "mainScripture": "“You are the Lord, you alone. You have made heaven, the heaven of heavens, with all their host, the earth and all that is on it, the seas and all that is in them; and you preserve all of them; and the host of heaven worships you.” — Nehemiah 9:6",
    "otherScriptures": [
      { "ref": "Psalm 103:19", "link": blbLink("Psalm 103:19") },
      { "ref": "Proverbs 16:33", "link": blbLink("Proverbs 16:33") },
      { "ref": "Acts 17:24-28", "link": blbLink("Acts 17:24-28") },
      { "ref": "Colossians 1:17", "link": blbLink("Colossians 1:17") },
      { "ref": "Hebrews 1:3", "link": blbLink("Hebrews 1:3") }
    ],
    "explanation": "It is important to remember that in everything that happens, God is actively working to bring about the ends that he desires. There is no luck. There is no happenstance or coincidence. There is only God and his providence. We will not always understand his works, and God doesn’t owe it to us to explain everything he does (Deut 29:29), but we can be sure that he is always just in all he does (Gen 18:25).",
     expandedExplanation: [
      `God's providence encompasses his ongoing involvement in the universe he created, where he sustains and directs every aspect of existence with perfect holiness, wisdom, and power. This divine governance is not a distant oversight but an active, intimate preservation of all creatures, ensuring their continued being and function according to his eternal purposes (Nehemiah 9:6; Colossians 1:17). In his holiness, God upholds the moral order of creation, restraining evil and promoting good in ways that reflect his unblemished character. His wisdom ensures that every event, from the orbit of planets to the fall of a sparrow, aligns with his comprehensive plan, weaving together countless threads into a tapestry of redemptive history (Proverbs 16:33; Matthew 10:29-30). His power manifests in the effortless execution of this governance, as he who spoke worlds into being now upholds them by the word of his power (Hebrews 1:3; Acts 17:24-28).`,
      `This providential care extends to all actions of his creatures, meaning nothing occurs outside his sovereign decree. Even human choices, while genuinely free in their execution, are encompassed within God's overarching will, allowing for responsibility without compromising his ultimate authority (Psalm 103:19; Ephesians 1:11). In times of prosperity or adversity, believers recognize that God's providence is never arbitrary but always purposeful, directing all things toward the fulfillment of his glory and the good of his people (Romans 8:28; Genesis 50:20). Thus, providence invites trust in God's unchanging faithfulness, as he who preserves the stars in their courses also guards the steps of his children (Job 38:31-33; Psalm 37:23-24).`,
      `In contemplating God's providence, hearts are drawn to worship the One whose holy, wise, and powerful acts sustain the cosmos in perfect harmony. This truth transforms daily life, fostering peace amid uncertainty and humility before mystery, as believers rest in the assurance that their lives are held in the hands of an infinitely good Governor, leading to everlasting praise.`
    ]
  },
  {
    "id": 12,
    "question": "What is the work of creation?",
    "answer": "The work of creation is God’s making all things out of nothing, by the word of his power, and all very good.",
    "mainScripture": "“By faith we understand that the universe was created by the word of God, so that what is seen was not made out of things that are visible.” — Hebrews 11:3",
    "otherScriptures": [
      { "ref": "Genesis 1:1", "link": blbLink("Genesis 1:1") },
      { "ref": "Exodus 20:11", "link": blbLink("Exodus 20:11") },
      { "ref": "John 1:1-3", "link": blbLink("John 1:1-3") },
      { "ref": "Romans 4:17", "link": blbLink("Romans 4:17") }
    ],
    "explanation": "Before creation there was only God in the holy fellowship of the Trinity. Therefore, his creation is always different from ours: we start with something. God not only made all things, but gives purpose and meaning to all that he created.",
     expandedExplanation: [
      `The work of creation reveals God's sovereign act of bringing the entire universe into existence from absolute nothingness, solely by the command of his omnipotent word, resulting in a cosmos declared inherently good. This ex nihilo creation underscores God's self-existence being independent of any prior matter or necessity, as he who eternally is calls forth what was not (Genesis 1:1; Romans 4:17). By his word, spoken with effortless authority, light pierced darkness, heavens expanded, and earth took form, demonstrating the infinite power inherent in his divine speech (Hebrews 11:3; Psalm 33:6-9). Each element—skies, seas, land, luminaries, creatures—was fashioned with purposeful design, reflecting his wisdom in establishing order from void (Exodus 20:11; Proverbs 3:19-20).`,
      `In this creative act, God imbued the world with intrinsic goodness, free from defect or evil, as a harmonious realm suited for his glory and the flourishing of life (Genesis 1:31; Ecclesiastes 3:11). The sequence of days culminates in a sabbath rest, foreshadowing the eschatological peace where creation finds its ultimate end in communion with its Maker (Genesis 2:1-3; Hebrews 4:9-10). Through the eternal Word, who was with God and was God, all things were made, linking creation to the intra-Trinitarian life where Father, Son, and Spirit delight in eternal fellowship (John 1:1-3; Colossians 1:16). This distinguishes divine creation from human making, as God originates reality itself without raw materials, affirming his absolute transcendence over the contingent universe (Isaiah 40:26; Jeremiah 10:12).`,
      `Beholding the work of creation evokes profound adoration for the God whose word alone fashions worlds in pristine goodness. This doctrine reshapes human perspective, inspiring stewardship of the earth as a reflection of his creative benevolence and stirring souls to pursue the ultimate rest found in him, culminating in eternal worship.`
    ]
  },
  {
    "id": 13,
    "question": "How did God create man?",
    "answer": "God created man, male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over other creatures.",
    "mainScripture": "“So God created man in his own image, in the image of God he created him; male and female he created them. And God blessed them. And God said to them, ‘Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth.’” — Genesis 1:27-28",
    "otherScriptures": [
      { "ref": "Genesis 1:27-28", "link": blbLink("Genesis 1:27-28") },
      { "ref": "Ephesians 4:24", "link": blbLink("Ephesians 4:24") },
      { "ref": "Colossians 3:10", "link": blbLink("Colossians 3:10") }
    ],
    "explanation": "What we mean here is that we were created with the capacity for sharing his knowledge and righteousness and holiness in a relationship of trust and love unlike any other creature.",
     expandedExplanation: [
      `In creating humanity, God fashioned male and female distinctly in his image, endowing them with knowledge, righteousness, and holiness, while granting them dominion over the earthly creation as stewards under his authority. This imago Dei signifies humanity's unique capacity to reflect God's communicable attributes, bearing a resemblance that enables relational communion with him unlike any other creature (Genesis 1:27; Ephesians 4:24). In knowledge, humans were created with rational faculties to comprehend truth, discern good from evil, and apprehend God's revelation in creation and conscience (Colossians 3:10; Romans 1:19-20). Righteousness equipped them with moral integrity, aligning their wills perfectly with God's just standards, free from sin's corruption (Ecclesiastes 7:29; Psalm 119:1-3).`,
      `Holiness set humanity apart as consecrated to God, mirroring his separateness in purity and devotion, fostering unhindered fellowship in the garden paradise (Leviticus 20:26; 1 Peter 1:15-16, applied to original state). This triadic endowment—knowledge, righteousness, holiness—culminated in dominion, a delegated rule over fish, birds, and beasts, exercising wise governance under the authority of the King (Genesis 1:28; Psalm 8:6-8). Male and female together embody this image, complementary in unity, reflecting the relational dynamics within the Godhead (Genesis 2:18-25; 1 Corinthians 11:3). Thus, human creation highlights God's intentional design for dignified purpose, not mere existence, but representation of his glory in the material realm (Isaiah 43:7; 1 Corinthians 10:31).`,
      `Reflecting on this divine craftsmanship summons worship for the Creator who imprints his likeness upon dust, transforming it into bearers of eternal significance. Such truth reorients life toward recovering this image through redemption, cultivating knowledge of God, pursuit of righteousness, and consecrated holiness, yielding lives of fruitful dominion and perpetual praise.`
    ]
  },
  {
    "id": 14,
    "question": "What is the primary purpose for which man was created?",
    "answer": "Man was created to glorify God and enjoy him forever.",
    "mainScripture": "“To the King of ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.” — 1 Timothy 1:17",
    "otherScriptures": [
      { "ref": "Psalm 16:11", "link": blbLink("Psalm 16:11") },
      { "ref": "Psalm 37:4", "link": blbLink("Psalm 37:4") },
      { "ref": "Psalm 73:25-26", "link": blbLink("Psalm 73:25-26") },
      { "ref": "Isaiah 43:7", "link": blbLink("Isaiah 43:7") },
      { "ref": "1 Corinthians 10:31", "link": blbLink("1 Corinthians 10:31") },
      { "ref": "Revelation 4:11", "link": blbLink("Revelation 4:11") }
    ],
    "explanation": "To “Glorify” means to reflect or display as glorious. Scripture plainly teaches that we were created to glorify our creator. What is astonishing is that this same creator desires that we find our satisfaction in him alone as well. There is joy unspeakable found in knowing and bringing glory to our God.",
     expandedExplanation: [
      `Humanity's chief end, woven into the fabric of existence, is to glorify God by manifesting his supreme worth and to enjoy him as the fountain of infinite delight, enduring eternally in unbroken communion. Glorification entails reflecting God's attributes through obedient lives that display his holiness, wisdom, and love, making his invisible qualities visible in human conduct (Isaiah 43:7; 1 Corinthians 10:31). This is not servile duty but joyful response to his inherent majesty, as creatures find their highest purpose in ascribing honor to the One deserving all praise (Revelation 4:11; Psalm 29:2). Enjoyment of God complements this, as souls delight in his presence, finding satisfaction in his beauty and goodness that surpasses all earthly pleasures (Psalm 16:11; Psalm 73:25-26).`,
      `Scripture intertwines these twin aims, revealing that true glorification flows from intimate enjoyment, where knowing God intimately fuels worshipful living (Jeremiah 9:23-24; Philippians 3:8-10). In creation's original harmony, this purpose was unmarred, with humanity reveling in God's fellowship amid edenic bliss (Genesis 3:8; Psalm 37:4). Even amid fallenness, this ultimate aim persists as the redemptive goal, where believers are conformed to Christ's image to exalt God eternally (Romans 8:29-30; Ephesians 1:11-12). Thus, life's pursuits—work, relationships, trials—are reframed as avenues to honor him and savor his sufficiency, binding doctrine to devotion in seamless unity (John 17:3; 1 Timothy 1:17).`,
      `In grasping this profound purpose, hearts overflow in adoration for the God who ordains our existence for his glory and our joy. This truth profoundly alters daily existence, redirecting ambitions toward eternal satisfaction in him, fostering lives of worshipful delight that echo into forever.`
    ]
  },
  {
    "id": 15,
    "question": "What is the glory of God?",
    "answer": "The glory of God is His outwardly expressed holiness.",
    "mainScripture": "“And one called to another and said: “Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!” — Isaiah 6:3",
    "otherScriptures": [
      { "ref": "Psalm 19:1", "link": blbLink("Psalm 19:1") },
      { "ref": "Isaiah 42:8", "link": blbLink("Isaiah 42:8") },
      { "ref": "Romans 15:7", "link": blbLink("Romans 15:7") },
      { "ref": "Ephesians 1:11-12", "link": blbLink("Ephesians 1:11-12") },
      { "ref": "Philippians 1:20", "link": blbLink("Philippians 1:20") }
    ],
    "explanation": "The basic definition of holy is to be separated from the common. The biblical portrayal of God’s unique holiness speaks loudly to his “one of a kind-ness” in all of his characteristics. His holiness radiates his intrinsic worth, his beauty, his greatness, etc. This recognizable outward expression of God’s holiness is what we call His Glory and it is central to all that He is and does. “All that is ever spoken of in the Scriptures as an ultimate end of God’s works is included in that one phrase, the glory of God.” — Jonathan Edwards.",
     expandedExplanation: [
      `God's glory constitutes the radiant manifestation of his intrinsic holiness, outwardly displaying his unparalleled worth, beauty, and majesty throughout creation and redemption. Holiness denotes God's absolute separation from all that is common or impure, marking his transcendent uniqueness in every attribute—eternal, immutable, omnipotent, omniscient, and infinitely good (Isaiah 6:3; Exodus 15:11). This holiness is not static but unrestrained, emanating as glory that fills the earth, evident in the heavens declaring his handiwork and the seraphim's ceaseless cry (Psalm 19:1; Revelation 4:8). Glory, then, is the visible splendor of this holiness, compelling recognition and reverence from all beings (Psalm 96:3-4; Romans 11:36).`,
      `In Scripture, God's glory appears in theophanies, like the pillar of cloud and fire, or the shekinah in the temple, symbolizing his dwelling presence amid his people (Exodus 40:34-38; 1 Kings 8:10-11). It culminates in the incarnation, where the Word made flesh reveals the Father's glory full of grace and truth (John 1:14; Hebrews 1:3). All divine actions—creation, providence, salvation—aim at this end, as God shares his glory with none other, yet invites creatures to partake in reflecting it (Isaiah 42:8; Ephesians 1:11-12). Thus, glory is not peripheral but central, the ultimate end uniting God's self-revelation and human response (Habakkuk 2:14; Philippians 2:10-11).`,
      `Meditating on God's glory evokes awe-struck worship for the Holy One whose splendor permeates existence. This doctrine reshapes believers, calling them to live as mirrors of his holiness, pursue purity and proclame that his name be hallowed, leading to transformed lives of eternal exaltation.`
    ]
  },
  {
    "id": 16,
    "question": "How do we worship God?",
    "answer": "Right worship is a right honoring, in thought and practice, of God the way He really is.",
    "mainScripture": "“I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.” — Romans 12:1",
    "otherScriptures": [
      { "ref": "Matthew 15:8-9", "link": blbLink("Matthew 15:8-9") },
      { "ref": "John 4:23-24", "link": blbLink("John 4:23-24") },
      { "ref": "1 Corinthians 10:31", "link": blbLink("1 Corinthians 10:31") }
    ],
    "explanation": "Worship begins with right thinking about God, includes a right spiritual grasp of God’s supreme value and from there comes the natural progression of acting in a way that reflects those things. What we think and believe will always come out in our actions. “Through him, then,” (that is Christ) “let us continually offer up a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name. Do not neglect to do good and to share what you have, for such sacrifices are pleasing to God.” — Hebrews 13:15-16.",
     expandedExplanation: [
      `True worship of God flows from a heart that beholds Him as He has revealed Himself in Scripture, acknowledging His infinite worth and responding in every aspect of life. It begins in the mind, where we must align our thoughts with the truth of God's character—His holiness, sovereignty, and unchanging goodness—rejecting any distortion or vain imagination that diminishes His glory (Matthew 15:8-9). Worship is not confined to rituals or moments but encompasses the whole of our existence, as we present our bodies as living sacrifices, transforming ordinary actions into acts of devotion (Romans 12:1-2). This spiritual worship demands that we honor God in spirit and truth, engaging our innermost being with sincere adoration rather than empty forms (John 4:23-24).`,
      `In practice, this honoring extends to all we do, whether in eating, drinking, or any endeavor, ensuring that every deed reflects God's supreme value and brings Him glory (1 Corinthians 10:31). The Scriptures portray worship as a continual offering of praise through Christ, manifesting in the fruit of lips that confess His name and in deeds of goodness and generosity that please Him (Hebrews 13:15-16). It is a response to God's mercy, compelling us to live in obedience and gratitude, recognizing that true worship integrates doctrine with daily living, where faith produces works that exalt the Lord.`,
      `Thus, as we grasp the depth of God's self-revelation, our worship becomes a pathway to deeper communion with Him, stirring our souls to greater reverence and transforming our lives into a symphony of praise that echoes His eternal glory.`
    ]
  },
  {
    "id": 17,
    "question": "What special act of providence did God exercise towards man when he was first created?",
    "answer": "When God created man, he made a covenant with him that he should live and enjoy all the benefits of creation, but that he would die if he forsook the obedience that comes from faith. God commanded him not to eat of the tree of the knowledge of good and evil, and thus forsake his child-like dependence upon God for all things.",
    "mainScripture": "“The Lord took the man and put him in the garden of Eden to work it and keep it. And the Lord God commanded the man saying, ‘You may surely eat of every tree of the garden, but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die’.” — Genesis 2:15-17",
    "otherScriptures": [
      { "ref": "Genesis 2:15-17", "link": blbLink("Genesis 2:15-17") },
      { "ref": "Galatians 3:12", "link": blbLink("Galatians 3:12") },
      { "ref": "Romans 5:12", "link": blbLink("Romans 5:12") }
    ],
    "explanation": "The “knowledge of good and evil” is the ability to judge independently what is beneficial (good) and harmful (evil) for ourselves. What God is forbidding is that man should choose to be independent from God in his evaluation of things. He is commanding man to walk by faith in the wise and loving care of his heavenly Father.",
     expandedExplanation: [
      `In His providential care at creation, God established a covenantal relationship with humanity, embedding within it the promise of life and blessing contingent upon faithful obedience. This covenant, often termed the covenant of works, reflected God's sovereign authority and benevolent design, placing Adam in the Garden of Eden not merely as a habitat but as a realm where dependence on the Creator would yield abundant enjoyment of all creation's benefits (Genesis 2:15-17). The command regarding the tree of the knowledge of good and evil served as a test of faith, prohibiting autonomous judgment that severs trust in God's wisdom and provision, thereby underscoring humanity's creaturely status and the necessity of child-like reliance on the divine will.`,
      `This arrangement highlighted the law of God woven into the fabric of creation, where obedience flowing from faith would sustain life, while disobedience would incur death, introducing the principle that the law brings life to the righteous but condemnation to the transgressor (Galatians 3:12; Romans 5:12). It revealed God's holiness in demanding perfect conformity to His commands, yet also His grace in providing an environment conducive to flourishing under His lordship. Additional Scriptures affirm this dynamic, portraying sin's entrance as a rupture of this covenantal bond, leading to universal accountability and the shadow of mortality over all descendants (Romans 5:18-19).`,
      `In contemplating this primal act of providence, we are drawn to adore the God whose covenants are expressions of His unchanging faithfulness, prompting us to seek restoration through the new covenant in Christ, where obedience is empowered by grace, transforming rebels into heirs of eternal life.`
    ]
  },
  {
    "id": 18,
    "question": "What is the Law?",
    "answer": "The Law of God is his perfect standard by which all people are held accountable. It shows us how God expects us to act toward Him and other people and reveals to mankind their inability to honor God by their own efforts.",
    "mainScripture": "“Now we know that whatever the law says it speaks to those who are under the law, so that every mouth may be stopped, and the whole world may be held accountable to God. For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin.” — Romans 3:19-20",
    "otherScriptures": [
      { "ref": "Deuteronomy 5", "link": blbLink("Deuteronomy 5:1-33") },
      { "ref": "Romans 4:15", "link": blbLink("Romans 4:15") },
      { "ref": "Romans 5:20", "link": blbLink("Romans 5:20") },
      { "ref": "Romans 7:8-9", "link": blbLink("Romans 7:8-9") },
      { "ref": "Galatians 3:23-24", "link": blbLink("Galatians 3:23-24") }
    ],
    "explanation": "From the onset of creation, God’s law is evident. When he put Adam and Eve in the garden He gave them a standard to live by that was directly related to submitting to his lordship and carried the weight of death if broken. When he rescued the Israelites out of Egypt he had to re-teach them how to worship him and how to treat their neighbor as well as remind them of the severity for failing to do so. It is a standard that no one can keep, and no one has except Jesus. This is not because God’s standard is too high. In fact God’s standard is equal to and flows from his worth an his holiness. We, on the other hand, are creatures that are prone to place our wants and desires above all else and God’s law reveals to us exactly how we fall short in our worship of him.",
    expandedExplanation: [
      `The Law of God stands as the immutable expression of His holy character, serving as the eternal standard by which all humanity is measured and found wanting apart from divine intervention. It encapsulates God's perfect righteousness, demanding unflinching love toward Him and toward others, revealing not only the path of true human flourishing but also the depth of our inherent rebellion against the Creator (Deuteronomy 5:6-21). Through the Law comes the knowledge of sin, silencing every excuse and rendering the world accountable before a just and worthy God, for it exposes the futility of self-justification by human effort (Romans 3:19-20; 4:15).`,
      `This divine standard, evident from creation and reiterated in the Mosaic covenant, functions as a guardian that highlights transgression, increasing awareness of sin's pervasive grip and our inability to attain righteousness on our own (Romans 5:20; 7:8-9; Galatians 3:23-24). It mirrors God's attributes—His justice, truth, and love—calling creatures to reflect His image in moral purity, yet it condemns all who fall short, pointing inexorably to the need for a Savior who fulfills it perfectly. Scriptures further illustrate this, showing the Law as a tutor leading to Christ, where faith appropriates what works cannot achieve (Galatians 3:24).`,
      `As we behold the Law's majesty, it humbles us before God's throne, evoking worship for His unapproachable holiness and driving us to the cross, where mercy transforms lawbreakers into sons and daughters conformed to His will.`
    ]
  },
  {
    "id": 19,
    "question": "What do the first through fourth commandments mainly teach?",
    "answer": "The first through fourth commandments mainly teach us how to relate to and worship God.",
    "mainScripture": "“I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery. You shall have no other gods before me. You shall not make for yourself a carved image… You shall not take the name of the LORD your God in vain… Observe the Sabbath day, to keep it holy…” — Deuteronomy 5:6-12",
    "otherScriptures": [
      { "ref": "Exodus 20:1-17", "link": blbLink("Exodus 20:1-17") },
      { "ref": "Deuteronomy 5:6-12", "link": blbLink("Deuteronomy 5:6-12") },
      { "ref": "Matthew 22:37-38", "link": blbLink("Matthew 22:37-38") },
      { "ref": "Mark 12:30", "link": blbLink("Mark 12:30") }
    ],
    "explanation": "The first four commandments teach us how to hold our LORD God in his proper place of reverence and worship. They teach of God’s holiness. We shall have no other gods, shall not compare him to his creation, shall not dishonor his namesake and shall submit to his authority. These principles establish a foundation of our understanding of God’s glory and holiness, as well as give us the reason for and foundation of the rest of the commandments and His law.",
     expandedExplanation: [
      `The initial commandments of the Decalogue delineate the foundational duties of humanity toward the sovereign Lord, emphasizing exclusive devotion and reverent worship that befits His transcendent glory. The first commandment asserts God's absolute supremacy, demanding that He alone occupy the throne of our affections, with no rivals or divided loyalties, for He is the self-existent One who redeems and sustains (Deuteronomy 5:6-7; Exodus 20:3). This prohibits idolatry in all forms, guarding against the human propensity to supplant the Creator with created things (Romans 1:25).`,
      `The second commandment extends this by forbidding graven images, preserving the incomparability and immutability of God, who cannot be represented or manipulated by human constructs, lest worship devolve into superstition (Deuteronomy 5:8-10; Isaiah 40:18).`,
      `The third upholds the sanctity of God's name, calling for its hallowed use in every utterance as well as a hollowed representation in the actions of those who bear his name, reflecting His holiness and authority (Deuteronomy 5:11; Leviticus 19:12).`,
      `The fourth institutes the Sabbath as a sign of covenantal rest, pointing to God's sovereign rule over time and creation, inviting participation in His rhythm of work and renewal (Deuteronomy 5:12-15; Exodus 31:13).`,
      `These precepts, summarized in the great commandment to love God wholly (Matthew 22:37-38; Mark 12:30), establish the vertical axis of human existence, rooting all ethics in the worship of the triune God. In their light, we are summoned to exalt His name above all, fostering a life of undivided allegiance that blossoms into eternal praise and conformity to His image.`
    ]
  },
  {
    "id": 20,
    "question": "What do the fifth through tenth commandments mainly teach?",
    "answer": "The fifth through tenth commandments mainly teach us how to honor God in our relating to people.",
    "mainScripture": "“Honor your father and your mother… You shall not murder. You shall not commit adultery. You shall not steal. You shall not bear false witness against your neighbor. You shall not covet…” — Deuteronomy 5:16-21",
    "otherScriptures": [
      { "ref": "Exodus 20:1-17", "link": blbLink("Exodus 20:1-17") },
      { "ref": "Deuteronomy 5:16-21", "link": blbLink("Deuteronomy 5:16-21") },
      { "ref": "Matthew 22:39-40", "link": blbLink("Matthew 22:39-40") },
      { "ref": "Mark 12:31", "link": blbLink("Mark 12:31") }
    ],
    "explanation": "The first four commandments are the foundation for the last six. Out of our adoration and worship of the Lord, we seek to treat those made in his image in a way that reflects His nature. God is a God of truth, so we do not deceive. God is the life giver, so we do not murder. God is our provider, so we do not covet. We treat our neighbors in a way that reflects our worship of God.",
     expandedExplanation: [
      `The latter commandments of the Decalogue articulate the horizontal dimensions of godly living, instructing humanity in relational ethics that flow from and honor the divine image in others. Beginning with the fifth, they enjoin honor toward parents as representatives of God's authority, fostering order and blessing in societal structures that mirror heavenly hierarchy (Deuteronomy 5:16; Ephesians 6:1-3).`,
      `The sixth prohibits murder, safeguarding the sanctity of life as God's gift and prerogative, condemning not only overt violence but hatred that erodes communal harmony (Deuteronomy 5:17; Matthew 5:21-22)`,
      `The seventh upholds the covenant of marriage, reflecting God's faithfulness and the purity required in human bonds, guarding against adultery that fractures trust and defiles the body as a temple (Deuteronomy 5:18; Hebrews 13:4)`,
      `The eighth forbids theft, affirming God's provision and justice, calling for contentment and generosity rather than exploitation (Deuteronomy 5:19; Ephesians 4:28).`,
      `The ninth demands truthfulness, echoing God's veracity and prohibiting false witness that perverts justice and relationships (Deuteronomy 5:20; Proverbs 12:22).`,
      `The tenth addresses covetousness, the root of many sins, urging satisfaction in God's sovereignty over possessions and circumstances (Deuteronomy 5:21; Romans 7:7).`,
      `These, grounded in love for neighbor (Matthew 22:39-40; Mark 12:31), manifest worship through ethical conduct, transforming interpersonal dynamics into arenas of divine glory. Thus, in obeying them, we magnify the Lawgiver's righteousness, cultivating hearts attuned to His kingdom and lives that radiate His redemptive love.`
    ]
  },
  {
    "id": 21,
    "question": "Did our first parents (Adam and Eve) continue in the glad obedience for which they were created?",
    "answer": "No, but desiring to be like God, they forsook the obedience of faith, ate from the forbidden tree, sinned against God and fell from the innocence in which they were created.",
    "mainScripture": "“Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned—” — Romans 5:12",
    "otherScriptures": [
      { "ref": "Genesis 3:1-7", "link": blbLink("Genesis 3:1-7") },
      { "ref": "Ecclesiastes 7:29", "link": blbLink("Ecclesiastes 7:29") },
      { "ref": "Ecclesiastes 9:3", "link": blbLink("Ecclesiastes 9:3") },
      { "ref": "Isaiah 1:2-31", "link": blbLink("Isaiah 1:2-31") }
    ],
    "explanation": "The Genesis account of the fall of man reveals to us a great deal of our own natures. Primarily, when we must choose between peace with and submission to God or lordship over our own selves, our natures, without God's intervention, will always choose lordship over our own selves, which is a direct affront to the righteous standard set by God.",
     expandedExplanation: [
      `The fall of our first parents, Adam and Eve, marks the tragic introduction of sin into the human experience, a deliberate act of rebellion against the divine command that shattered the pristine harmony of creation. Created in innocence and placed in the garden with the freedom to obey God in faith, they were tempted by the serpent to question God's goodness and authority, leading them to eat from the tree of the knowledge of good and evil (Genesis 3:1-6). This was not mere curiosity but a profound desire to be like God, asserting autonomy over dependence, which constituted the essence of sin as unbelief and disobedience. In this moment, they forfeited the glad obedience for which they were formed, introducing corruption into their nature and severing the unhindered fellowship with their Creator.`,
      `The consequences of this fall were immediate and far-reaching, as sin brought forth death—spiritual separation from God, physical mortality, and the curse upon the earth itself (Genesis 3:16-19; Romans 5:12). What was once a state of moral purity became one of guilt and shame, with Adam and Eve hiding from God's presence, illustrating the inherent alienation sin causes (Genesis 3:8-10). This act was not isolated but representative, as Adam stood as the federal head of humanity, his transgression imputing sin to all descendants (1 Corinthians 15:22). Yet, even in judgment, God's mercy shines through in the protoevangelium, the first promise of a Redeemer who would crush the serpent's head (Genesis 3:15), pointing forward to the restoration of obedience through Christ.`,
      `Scripture portrays this fall as the root of all human wickedness, where hearts turned from God lead to multiplied evils, as seen in the downward spiral from Cain's murder to the pre-flood corruption (Genesis 4:8; 6:5). Ecclesiastes reflects on humanity's upright creation now marred by sin's devices (Ecclesiastes 7:29), while Isaiah laments the rebellion of God's children against their Father (Isaiah 1:2-4). This narrative underscores God's holiness, which cannot abide sin, and humanity's propensity to choose self over sovereign Lord.`,
      `In beholding this truth, our hearts are drawn to adore the God who, though offended by sin, pursues sinners with redeeming love, transforming rebellious hearts to delight in obedience through the gospel. May this propel us to live in vigilant faith, rejecting the allure of autonomy and embracing the submission that honors our Creator.`
    ]
  },
  {
    "id": 22,
    "question": "What is sin?",
    "answer": "Sin is the transgression of the revealed will of God, which teaches that we are to act in perfect holiness from a heart of faith to the glory of God.",
    "mainScripture": "“Everyone who makes a practice of sinning also practices lawlessness; sin is lawlessness.” — 1 John 3:4",
    "otherScriptures": [
      { "ref": "Isaiah 59:2", "link": blbLink("Isaiah 59:2") },
      { "ref": "Romans 3:23", "link": blbLink("Romans 3:23") },
      { "ref": "Romans 5:13", "link": blbLink("Romans 5:13") },
      { "ref": "Romans 6:23", "link": blbLink("Romans 6:23") },
      { "ref": "Romans 14:23", "link": blbLink("Romans 14:23") },
      { "ref": "Galatians 5:19-21", "link": blbLink("Galatians 5:19-21") },
      { "ref": "James 4:17", "link": blbLink("James 4:17") }
    ],
    "explanation": "Scripture tells us that whatever does not proceed from faith is sin. Therefore, we can say that sin is any attitude or desire or action that explicitly breaks the commandments of Scripture, or comes from a heart of unbelief or is not done for the glory of God. Sin comes from a heart that is in natural rebellion to and/or rejects the sovereignty of God willingly or indifferently. And we are all guilty according to the scriptures.",
     expandedExplanation: [
      `Sin, at its core, is any deviation from the perfect will of God as revealed in His law, encompassing not only overt actions but also the attitudes and desires of the heart that fail to align with His holiness. It originates from a posture of unbelief, where the creature rejects the Creator's authority, choosing instead to exalt self or created things above Him (Romans 1:21-23). The Scriptures define sin as lawlessness, a willful transgression against God's commands, whether by commission—doing what is forbidden—or omission—failing to do what is required (1 John 3:4; James 4:17). This includes everything that does not proceed from faith, rendering even seemingly good deeds sinful if not motivated by trust in God and aimed at His glory (Romans 14:23; 1 Corinthians 10:31).`,
      `The nature of sin is deeply relational, creating a barrier between humanity and God, as it offends His infinite purity and justice (Isaiah 59:2). From the first sin in the garden, it has corrupted the human heart, inclining it toward evil continually (Genesis 6:5; Jeremiah 17:9). Sin manifests in diverse forms: idolatry, which supplants God with lesser gods; pride, which mirrors Satan's fall; and the works of the flesh, such as immorality, enmity, and strife (Galatians 5:19-21; Isaiah 14:12-15). Yet, it is not merely external; Jesus teaches that sin begins in the heart, with lust equating adultery and hatred murder (Matthew 5:21-28). This holistic view reveals sin as a comprehensive rebellion against God's sovereignty, disrupting the peace and unity He intended for creation.`,
      `Biblically, sin's entry through Adam brought universal death and condemnation, but God's law exposes it, making sinners accountable (Romans 5:13; 3:20). The wages of sin are death, underscoring its gravity as an assault on the life-giving God (Romans 6:23) as well as attesting to His infinite worth. In Ecclesiastes, the heart is described as full of evil from youth (Ecclesiastes 9:3), while Paul affirms that all have sinned and fall short of God's glory (Romans 3:23).`,
      `Contemplating this doctrine leads us to worship the holy God whose law reflects His perfect character, inspiring awe at His patience with sinners. It stirs us to pursue holiness from a heart of faith, glorifying Him in every thought, word, and deed, transformed by the gospel's power to overcome sin's dominion.`
    ]
  },
  {
    "id": 23,
    "question": "What does every sin deserve?",
    "answer": "Every sin deserves God’s just wrath and punishment, both in this life and in the one to come.",
    "mainScripture": "“But your iniquities have made a separation between you and your God, and your sins have hidden his face from you so that he does not hear.” — Isaiah 59:2-3",
    "otherScriptures": [
      { "ref": "Romans 3:23", "link": blbLink("Romans 3:23") },
      { "ref": "Romans 5:13", "link": blbLink("Romans 5:13") },
      { "ref": "Romans 6:23", "link": blbLink("Romans 6:23") },
      { "ref": "Romans 14:23", "link": blbLink("Romans 14:23") },
      { "ref": "Galatians 5:19-21", "link": blbLink("Galatians 5:19-21") },
      { "ref": "James 4:17", "link": blbLink("James 4:17") }
    ],
    "explanation": "Sin is a dismissal or disregard for the statutes of God which is a rejection of God himself. James 2 reminds us of this when it says, “For whoever keeps the whole law but fails in one point has become guilty of all of it.” The emphasis in this text is on God and his holy standards. The severity of the punishment of sins speaks to the holy perfect goodness and worth of the one who set the standards.",
     expandedExplanation: [
      `Every sin, regardless of its perceived magnitude, merits the righteous wrath of God, a just response from His holy nature against all unrighteousness that offends His infinite perfection. This wrath is not arbitrary anger but the settled opposition of divine justice to evil, manifesting in temporal judgments in this life and eternal punishment in the age to come (Romans 1:18; 2:5-6). Scripture teaches that sin separates us from God, hiding His face and provoking His displeasure, as seen in the prophetic indictments where iniquity leads to desolation (Isaiah 59:2; Psalm 7:11). Even a single transgression renders one guilty of the whole law, for it is ultimately against God Himself (James 2:10; Psalm 51:4).`,
      `The consequences of sin are multifaceted: in this world, it brings suffering, death, and societal decay, as the creation groans under the curse (Romans 8:20-22; Genesis 3:17-19). Eternally, it results in separation from God's presence, where the unrepentant face the lake of fire prepared for the devil and his angels (Revelation 20:14-15; Matthew 25:41). Yet, God's wrath is mingled with mercy, as He delays judgment to allow for repentance (2 Peter 3:9). The severity of punishment highlights God's glory—His justice demands satisfaction, while His love provides it in Christ (Romans 3:25-26).`,
      `Supporting texts emphasize sin's universal scope and deadly outcome: all have sinned and earn death (Romans 3:23; 6:23), and whatever lacks faith is sin, deserving condemnation (Romans 14:23). The works of the flesh lead to exclusion from God's kingdom (Galatians 5:19-21), and knowing good yet failing to do it incurs judgment (James 4:17). Isaiah's oracle depicts sin's defilement calling for divine retribution (Isaiah 1:18-20).`,
      `This truth evokes profound reverence for the God whose holiness blazes against sin, yet who in Christ absorbs His own wrath to redeem us. It compels us to flee sin, embracing the cross where justice and mercy meet, living in grateful obedience that reflects His redeeming grace.`
    ]
  },
  {
    "id": 24,
    "question": "Did all mankind fall in Adam’s first sin?",
    "answer": "All mankind, descending from Adam, sinned in him and fell with him in his sin.",
    "mainScripture": "“For as by a man came death, by a man has come also the resurrection of the dead. For as in Adam all die, so also in Christ shall all be made alive.” — 1 Corinthians 15:21-22",
    "otherScriptures": [
      { "ref": "Psalm 51:5", "link": blbLink("Psalm 51:5") },
      { "ref": "Romans 5:12-21", "link": blbLink("Romans 5:12-21") },
      { "ref": "Ephesians 2:3", "link": blbLink("Ephesians 2:3") }
    ],
    "explanation": "The doctrine of original sin teaches that although God created man upright and very good, all humanity inherits both the guilt and the corrupted nature resulting from Adam’s first sin in the garden, as he was, by God’s design, the root (or head) from which we all come.",
     expandedExplanation: [
      `The sin of Adam, as the covenantal head of humanity, implicated all his descendants in guilt and corruption, ensuring that every person inherits both the condemnation and the sinful nature resulting from that primal transgression. This doctrine of original sin affirms that Adam's act was not private but representative, as God ordained him as the federal representative of the race, so that in him all sinned (Romans 5:12; 1 Corinthians 15:22). Consequently, humanity fell collectively into a state of spiritual death, alienated from God and inclined toward evil from conception (Psalm 51:5; Ephesians 2:3).`,
      `This fall transmitted a polluted nature, where the image of God, though not eradicated, is marred, leading to total depravity—every faculty of the soul tainted by sin (Genesis 6:5; Jeremiah 17:9). Scripture illustrates this in the universal experience of death and sinfulness, as through one man's disobedience, many were made sinners (Romans 5:19). Yet, this underscores God's sovereignty in creation and redemption, for just as death came through Adam, life comes through Christ, the last Adam (1 Corinthians 15:45).`,
      `Additional verses reinforce this: all are by nature children of wrath (Ephesians 2:3), and sin's reign brings death to all because all sinned in Adam (Romans 5:12-14). The psalmist confesses innate sinfulness (Psalm 51:5), while Paul contrasts Adam's legacy with Christ's gift of righteousness (Romans 5:15-21).`,
      `In this profound reality, we worship the wise God who, in permitting the fall, displays His glory in election and redemption, turning curse into blessing through the Savior. It humbles us to recognize our shared plight, driving us to Christ for renewal, where the Spirit regenerates hearts to bear fruit in righteousness.`
    ]
  },
  {
    "id": 25,
    "question": "Did God leave all mankind to perish in the condition of sin and misery?",
    "answer": "Out of His grace and good pleasure, before the foundations of the world were laid, God chose for Himself a people for everlasting life, entering into a covenant of grace with them to deliver them from sin and misery and bring them into salvation through His redeemer.",
    "mainScripture": "“Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places, even as he chose us in him before the foundation of the world, that we should be holy and blameless before him.” — Ephesians 1:3-4",
    "otherScriptures": [
      { "ref": "Jeremiah 31:33", "link": blbLink("Jeremiah 31:33") },
      { "ref": "Acts 13:48", "link": blbLink("Acts 13:48") },
      { "ref": "Romans 5:21", "link": blbLink("Romans 5:21") },
      { "ref": "Romans 8:29-30", "link": blbLink("Romans 8:29-30") },
      { "ref": "Romans 11:5-7", "link": blbLink("Romans 11:5-7") },
      { "ref": "2 Thessalonians 2:13", "link": blbLink("2 Thessalonians 2:13") }
    ],
    "explanation": "The term covenant of grace speaks to the commitment and oath of God, wholly initiated and carried out through himself alone, to employ all his power and wisdom and love to rescue his people from sin and misery. This covenant cannot fail and is valid for all who believe. WHOSOEVER WILL MAY COME! And, since this believing and willing is the work of God’s sovereign grace, those who believe and come are his elect.",
     expandedExplanation: [
      `God's eternal election of a people for salvation flows from His sovereign grace and good pleasure, unconditioned by any foreseen merit in creatures (Romans 9:11-13). Before the foundation of the world, in the timeless counsel of His will, He chose individuals in Christ to be holy and blameless, predestining them to adoption as sons through Jesus Christ (Ephesians 1:4-5). This choice is not arbitrary but rooted in the depths of divine love, where God delights to set His affection on the undeserving, demonstrating the glory of His mercy (Deuteronomy 7:7-8; Ephesians 1:6).`,
      `This election is inseparably linked to the covenant of grace, an everlasting pact initiated unilaterally by God, wherein He binds Himself by oath to redeem His chosen ones from the bondage of sin and its consequent misery (Hebrews 6:17-18).This covenant of grace rests entirely on God's faithfulness, promising forgiveness, renewal, and eternal life through a Redeemer (Jeremiah 31:31-34). It encompasses all of redemptive history, from the protoevangelium in Genesis 3:15 to its fulfillment in Christ, ensuring that God's elect are drawn out of the mass of fallen humanity not by their own initiative but by His irresistible call (John 6:37; Acts 13:48).`,
      `The assurance of this covenant lies in its immutability, grounded in God's unchanging nature and sovereign power, which guarantees that what He purposes cannot be thwarted (Isaiah 46:10; Romans 8:29-30). Those elected are delivered from sin's penalty, power, and eventually presence, being brought into a state of salvation that includes justification, sanctification, and glorification—all secured through the mediatorial work of Christ (Titus 3:4-7). Thus, election magnifies God's grace, humbling human pride and exalting His self-sufficiency.`,
      `In beholding this doctrine, the soul is drawn to adore the God who chooses in love, leading to a life marked by gratitude, holiness, and unwavering trust in His providential care, as we rest in the certainty that our salvation is His work from beginning to end.`
    ]
  },
  {
    "id": 26,
    "question": "What does God require of us, that we may escape his wrath and curse, due to us for sin?",
    "answer": "To escape the wrath and curse of God due to us, He requires faith in Jesus, which leads to repentance unto life and the faithful use of the outward means, such as prayer and the sacraments, through which Christ communicates to us the benefits of redemption.",
    "mainScripture": "“I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.” — Galatians 2:20",
    "otherScriptures": [
      { "ref": "Matthew 28:19", "link": blbLink("Matthew 28:19") },
      { "ref": "Acts 2:38", "link": blbLink("Acts 2:38") },
      { "ref": "Acts 16:31", "link": blbLink("Acts 16:31") },
      { "ref": "Romans 5:21", "link": blbLink("Romans 5:21") },
      { "ref": "Romans 8:29-30", "link": blbLink("Romans 8:29-30") },
      { "ref": "Romans 11:5-7", "link": blbLink("Romans 11:5-7") },
      { "ref": "Philippians 4:6", "link": blbLink("Philippians 4:6") }
    ],
    "explanation": "As sinners, we are without the means to justify ourselves before God, but we know from texts like Eph 2 that by His grace, through faith in Jesus we can be saved. This true faith will always lead to repentance and a life that reflects God’s glory in all things.",
     expandedExplanation: [
      `Escape from God's righteous wrath and curse, merited by sin, is impossible through human effort alone, for all have sinned and fall short of His glory (Romans 3:23). Instead, God requires faith in Jesus Christ, a faith that receives Christ as the sole Redeemer and rests upon His finished work for justification before God (John 3:16; Acts 16:31). This faith is not mere intellectual assent but a living trust that unites the believer to Christ, imputing His righteousness and pardoning sin on the basis of His atoning sacrifice (Romans 5:1; Galatians 2:20).`,
      `True faith inevitably produces repentance unto life, a turning from sin to God with sorrow and hatred for transgression, coupled with a resolve for obedience empowered by the Spirit (Acts 2:38; 2 Corinthians 7:10). Repentance is not a meritorious work but the fruit of regeneration, where the heart is softened to perceive sin's gravity and God's mercy in Christ (Ezekiel 36:26; Joel 2:13). Together, faith and repentance form the inward graces through which sinners appropriate salvation, yet they are gifts from God, not self-generated (Ephesians 2:8-9; Philippians 1:29).`,
      `God also ordains outward means of grace—prayer, the preaching of the Word, and the sacraments of baptism and the Lord's Supper—to communicate the benefits of redemption (Matthew 28:19; Romans 10:17; 1 Corinthians 11:23-26). These are not magical rites but divinely appointed channels whereby Christ, through the Holy Spirit, strengthens faith, assures forgiveness, and nourishes spiritual growth (Colossians 2:11-12; Philippians 4:6-7). Engagement with these means reflects a diligent pursuit of holiness, as believers are called to work out their salvation with fear and trembling, knowing it is God who works in them (Philippians 2:12-13).`,
      `This divine requirement underscores God's holiness in demanding justice against sin while revealing His mercy in providing the way of escape through Christ alone. It calls the soul to worship the Redeemer who bears our curse (Galatians 3:13), fostering a life of continual dependence, joyful obedience, and communal edification in the body of Christ.`
    ]
  },
  {
    "id": 27,
    "question": "What is faith in Jesus Christ?",
    "answer": "Faith in Jesus Christ is saving grace, by which we receive and rest upon him alone for salvation, trusting in him to forgive us from our sins, and guide us to eternal joy on the basis of his divine power and atoning death.",
    "mainScripture": "“Yet we know that a person is not justified by works of the law but through faith in Jesus Christ, so we also have believed in Christ Jesus, in order to be justified by faith in Christ and not by works of the law, because by works of the law no one will be justified.” — Galatians 2:16",
    "otherScriptures": [
      { "ref": "John 1:12", "link": blbLink("John 1:12") },
      { "ref": "John 6:35", "link": blbLink("John 6:35") },
      { "ref": "Galatians 2:20", "link": blbLink("Galatians 2:20") },
      { "ref": "Philippians 3:9", "link": blbLink("Philippians 3:9") },
      { "ref": "Hebrews 10:39", "link": blbLink("Hebrews 10:39") }
    ],
    "explanation": "Faith is not an intellectual assent to any particular piece of knowledge. It is a core belief that we base our lives from. Faith in Jesus affects our whole being, as it is the basis/foundation of all we do. It is also, according to Eph 2:8-9, gifted to us by God.",
     expandedExplanation: [
      `Faith in Jesus Christ is a sovereignly bestowed grace, enabling sinners to receive Him as the all-sufficient Savior and rest upon His merits alone for salvation (John 1:12; Ephesians 2:8-9). It involves a heartfelt apprehension of Christ's person and work—His divine power as the eternal Son of God and His atoning death as the substitute for sinners—such that the believer trusts Him to forgive sins completely and guide to eternal joy (Hebrews 10:39; 1 Peter 1:8-9). This faith justifies not by its own virtue but by uniting us to Christ, whose righteousness is credited to us apart from works of the law (Galatians 2:16; Philippians 3:9).`,
      `Distinct from mere historical knowledge or temporary belief, saving faith engages the whole person: the mind in assenting to gospel truths, the heart in loving Christ supremely, and the will in submitting to His lordship (John 6:35; James 2:19). It perceives the depths of human depravity and the heights of divine mercy, leading to a relinquishment of self-reliance and a clinging to Christ's promises (Romans 4:5; Hebrews 11:1). As a gift of God's electing grace, faith originates from the Spirit's regenerative work, illuminating Scripture and convicting of truth (John 3:5-8; 1 Corinthians 2:14).`,
      `This faith endures through trials, producing perseverance and good works as evidence of its genuineness, yet salvation remains grounded solely in Christ's obedience and sacrifice (James 2:14-26; 1 John 5:4-5). It fosters assurance, not presumption, as believers behold Christ's intercession and the Spirit's witness within (Romans 8:16; Hebrews 7:25).`,
      `Contemplating this gift stirs profound adoration for the God who enlightens blind eyes and draws wanderers home, transforming lives into vessels of praise, marked by bold confession, steadfast hope, and loving service to the King who loved us first.`
    ]
  },
  {
    "id": 28,
    "question": "What is repentance unto life?",
    "answer": "Repentance unto life is a saving grace, by which a sinner, out of a true understanding of the nature and weight of his sin, as well as the mercy of God in Christ, with grief and hatred of his sin, turns from his sin to God, with wholehearted resolve and diligent pursuit of new obedience",
    "mainScripture": "“Now when they heard this they were cut to the heart, and said to Peter and the rest of the apostles, ‘Brothers, what shall we do?’ And Peter said to them, ‘Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins’” — Acts 2:37-38",
    "otherScriptures": [
      { "ref": "Jeremiah 31:18-19", "link": blbLink("Jeremiah 31:18-19") },
      { "ref": "Joel 2:13", "link": blbLink("Joel 2:13") },
      { "ref": "Romans 6:18", "link": blbLink("Romans 6:18") },
      { "ref": "2 Corinthians 7:10-11", "link": blbLink("2 Corinthians 7:10-11") }
    ],
    "explanation": "Repentance is the first and most natural action to flow from a regenerated heart. It is the sure product of faith. It presents itself in our lives in the form of striving obedience to God’s word that springs from the new heart planted in us by God (Ezek 36:26).",
     expandedExplanation: [
      `Repentance unto life emerges as a gracious work of the Holy Spirit, awakening a sinner to a true sense of sin's vileness against a holy God (Psalm 51:3-4; Acts 2:37). It involves not only intellectual recognition but a deep grief and hatred for sin, rooted in an apprehension of God's mercy extended in Christ, prompting a wholehearted turning from transgression to obedience (Jeremiah 31:18-19; 2 Corinthians 7:11). This turning is comprehensive, affecting thoughts, affections, and actions, with a resolute purpose to pursue newness of life in conformity to God's will (Romans 6:18; Ezekiel 18:30-32).`,
      `Unlike worldly sorrow that leads to death, godly repentance produces lasting fruit: confession, restitution where possible, and vigilance against relapse, all fueled by faith in Christ's forgiving power (Joel 2:13; Luke 15:18-21). It is inseparable from regeneration, where God replaces the heart of stone with one of flesh, enabling genuine contrition and delight in righteousness (Ezekiel 36:26; Acts 11:18). Repentance is ongoing in the believer's life, not a one-time event, as the Spirit convicts of residual sin and draws nearer to God (Psalm 139:23-24; 1 John 1:9).`,
      `This grace highlights God's patience and kindness, which lead to repentance, while underscoring human responsibility to respond (Romans 2:4; 2 Peter 3:9). It liberates from sin's dominion, fostering humility and dependence on Christ's sanctifying work (Romans 6:14; Colossians 3:5-10).`,
      `In this doctrine, we exalt the God who revives the contrite spirit, inspiring lives of continual renewal, fervent worship, and compassionate witness, as forgiven sinners become ambassadors of His reconciling grace.`
    ]
  },
  {
    "id": 29,
    "question": "What are the outward means by which Christ communicates to us the benefits of redemption?",
    "answer": "The outward means by which Christ communicates to us the benefits of His redemption are the study of His Word, His ordinances of Baptism and the Lord’s Supper and Prayer; all of which are made effectual to the elect for salvation.",
    "mainScripture": "“So those who received his word were baptized, and there were added that day about three thousand souls. And they devoted themselves to the apostles’ teaching and the fellowship, to the breaking of bread and the prayers” — Acts 2:41-42",
    "otherScriptures": [
      { "ref": "Psalm 19:7", "link": blbLink("Psalm 19:7") },
      { "ref": "Romans 10:17", "link": blbLink("Romans 10:17") },
      { "ref": "1 Corinthians 12:13", "link": blbLink("1 Corinthians 12:13") },
      { "ref": "James 1:18", "link": blbLink("James 1:18") }
    ],
    "explanation": "Christ communicates to us the benefits of redemption first through his word. Faith comes from hearing and hearing through the word of Christ (Rom 10:17). From there, his ordinances of Baptism and the Lord’s Supper, which are specially instituted by Christ, represent the outward signs of the new covenant made with the believer. Finally through prayer we express our dependence on, and confidence in our God.",
     expandedExplanation: [
      `The outward means through which Christ communicates the benefits of His redemption to His people are gracious provisions ordained by God to convey spiritual realities in tangible ways, all empowered by the Holy Spirit for the salvation of the elect. These means include the study of the Word, which is the primary instrument for revealing God's truth and will, as it declares the gospel of Christ crucified and risen, awakening faith and nurturing growth in grace (Romans 10:17; 2 Timothy 3:16-17). Baptism serves as an outward sign of inward cleansing and union with Christ in His death and resurrection, marking entrance into the covenant community and signifying the washing away of sins through faith (Acts 2:38; Romans 6:3-4). The Lord’s Supper, likewise, is a visible proclamation of Christ’s atoning death, where believers partake of the bread and cup as symbols of His body and blood, fostering communion with Him and one another in remembrance of His sacrifice (1 Corinthians 11:23-26; Matthew 26:26-28). Prayer, as an act of dependence and communion with God, opens the heart to receive His promises, invoking the Spirit's help in applying redemption's fruits amid daily life (Philippians 4:6-7; James 5:16).`,
      `These means are not inherently efficacious but are made effectual by the sovereign work of the Holy Spirit, who applies them to the elect, those chosen in Christ before the foundation of the world (Ephesians 1:4). The Spirit illumines the Word to convict and convert, seals the ordinances to strengthen faith, and enlivens prayer to draw believers nearer to God.`,
      `Together, they form a harmonious channel for the benefits of redemption—forgiveness, righteousness, and eternal life—flowing from Christ's finished work on the cross.`,
      `In beholding these outward means, the soul is stirred to adoration of the triune God, who in His wisdom provides such accessible avenues for grace, transforming believers from vessels of wrath to children of light, ever conforming them to the image of His Son in holiness and joy.`
    ]
  },
  {
    "id": 30,
    "question": "How is the study of the Word effective for salvation?",
    "answer": "The Spirit of God makes the reading and the preaching of the Word an effectual means of convincing and converting sinners, and of building them up in holiness, through faith unto salvation.",
    "mainScripture": "“For I am not ashamed of the Gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek” — Romans 1:16",
    "otherScriptures": [
      { "ref": "Psalm 19:7", "link": blbLink("Psalm 19:7") },
      { "ref": "Psalm 119:11", "link": blbLink("Psalm 119:11") },
      { "ref": "Psalm 119:18", "link": blbLink("Psalm 119:18") },
      { "ref": "Romans 10:17", "link": blbLink("Romans 10:17") },
      { "ref": "1 Thessalonians 1:6", "link": blbLink("1 Thessalonians 1:6") },
      { "ref": "1 Peter 2:1-2", "link": blbLink("1 Peter 2:1-2") }
    ],
    "explanation": "God has determined that one of the means of salvation is the hearing (or reading) of the word (Rom 10:17). After one is granted faith, the word is then studied so that its profitability for teaching, reproof, correction and training in righteousness (2 Tim 3:15-17) can be effectively utilized by the believer.",
     expandedExplanation: [
      `The study of the Word becomes effective for salvation through the sovereign agency of the Holy Spirit, who transforms the mere reading or hearing of Scripture into a powerful instrument for spiritual renewal and growth. The Spirit first employs the Word to convince sinners of their guilt and misery before a holy God, exposing the deceitfulness of sin and the futility of self-righteousness, much as the law serves as a tutor to lead to Christ (Psalm 19:7; Galatians 3:24). Then, He enlightens the mind with the knowledge of Christ's person and work, unveiling the gospel's glory as the power of God unto salvation, where faith is birthed through hearing (Romans 1:16; 10:17). Furthermore, the Spirit builds believers up in holiness by sanctifying them through the truth, hiding God's commands in the heart to resist sin and pursue righteousness (Psalm 119:11; John 17:17). He also imparts comfort amid trials, reminding the soul of God's promises and the hope of glory, sustaining faith unto perseverance (1 Thessalonians 1:6; Romans 15:4).`,
      `This efficacy resides not in human effort or eloquence but in the Spirit's divine operation, who breathes life into the letter of the law and gospel, making it living and active to discern thoughts and intentions (Hebrews 4:12; 2 Corinthians 3:6). Preaching, as an ordained extension of the Word's study, amplifies this work, as the Spirit uses proclaimed truth to convert the hardened and edify the saints (1 Corinthians 1:21; 2 Timothy 4:2).`,
      `Thus, the study of the Word, under the Spirit's blessing, leads the soul from darkness to light, from bondage to freedom, evoking profound gratitude to God, who by His breath revives the dead and equips His people for every good work, culminating in eternal praise.`
    ]
  },
  {
    "id": 31,
    "question": "How do Baptism and the Lord’s Supper become effective means of salvation?",
    "answer": "Baptism and the Lord’s Supper become effective means of salvation, not from any virtue in them or in the one that administers them, but only by the blessing of Christ, and the working of his Spirit in those who by faith receive them.",
    "mainScripture": "“We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.” — Romans 6:4",
    "otherScriptures": [
      { "ref": "Matthew 26:26-28", "link": blbLink("Matthew 26:26-28") },
      { "ref": "Acts 22:16", "link": blbLink("Acts 22:16") },
      { "ref": "1 Corinthians 12:13", "link": blbLink("1 Corinthians 12:13") },
      { "ref": "1 Peter 3:20-21", "link": blbLink("1 Peter 3:20-21") }
    ],
    "explanation": "Baptism and the Lord’s Supper differ from other ordinances of God in that they were specifically instituted by Christ to represent and apply to believers the benefits of the new covenant by visible and outward signs. In much the same way that the obedience of the believer is an outward expression of their faith, these ordinances are meant to outwardly express the cleansing of our sins, accomplished in the death and resurrection of Christ that is applied to the believer by faith.",
     expandedExplanation: [
      `Baptism and the Lord’s Supper become effective means of salvation solely through the blessing of Christ and the inward working of His Spirit in those who receive them by faith, devoid of any inherent power in the rites themselves or in their administrators. These ordinances, instituted by Christ as visible signs of the new covenant, outwardly depict inward spiritual realities: Baptism symbolizes the believer's burial with Christ in death to sin and resurrection to new life, signifying the washing of regeneration by the Spirit (Romans 6:4; Titus 3:5). The Lord’s Supper, in turn, represents the partaking of Christ's broken body and shed blood, nourishing faith in His atoning sacrifice and fostering unity in His body, the church (Matthew 26:26-28; 1 Corinthians 10:16-17). Yet, their efficacy depends entirely on Christ's sovereign benediction, as He alone imparts grace through them, not mechanically but relationally, to those united to Him.`,
      `The Holy Spirit activates these signs in the faithful recipient, applying the benefits of redemption—such as forgiveness, communion, and assurance—by stirring repentance, faith, and love (1 Peter 3:21; 1 Corinthians 12:13). Without faith, they remain empty forms, but with it, they seal God's promises, confirming the believer's participation in Christ's death and resurrection (Acts 22:16; Galatians 3:27).`,
      `In contemplating these sacred means, the heart overflows in worship to the ascended Christ, who graciously stoops to use earthly elements for heavenly ends, transforming ordinary acts into conduits of divine life, renewing His people in hope and holiness unto eternal glory.`
    ]
  },
  {
    "id": 32,
    "question": "How does the Holy Spirit apply to us the redemption purchased by Christ?",
    "answer": "The Spirit applies to us the redemption purchased by Christ, by working faith in us, thereby uniting us to Christ in our effectual calling.",
    "mainScripture": "“For it has been granted to you that for the sake of Christ you should not only believe in him but also suffer for his sake” — Philippians 1:29",
    "otherScriptures": [
      { "ref": "2 Chronicles 30:10-12", "link": blbLink("2 Chronicles 30:10-12") },
      { "ref": "Ezekiel 3:26-27", "link": blbLink("Ezekiel 3:26-27") },
      { "ref": "Acts 16:14", "link": blbLink("Acts 16:14") },
      { "ref": "Titus 3:5", "link": blbLink("Titus 3:5") }
    ],
    "explanation": "The working of faith in us by the Holy Spirit is the Spirit’s intervening in the lives of the believer by beginning in them the why and when of their belief in the Gospel. We see this all throughout the scriptures. In John’s account of the Gospels we see the Holy Spirit confirm Jesus as the Messiah to John the Baptist, we see it in the conversion of Lydia in Acts 16 and in other places.",
     expandedExplanation: [
      `The Holy Spirit applies to us the redemption purchased by Christ through His sovereign work of producing faith within the soul, thereby uniting believers to Christ in the unbreakable bond of effectual calling. This application begins with the Spirit's regenerative power, quickening the spiritually dead heart to perceive and respond to the gospel, as faith itself is a gift from God, not of human origin (Ephesians 2:1-5, 8-9; Philippians 1:29). By this faith, the Spirit effects union with Christ, wherein believers are incorporated into His body, sharing in His righteousness, life, and inheritance, as branches abide in the vine (John 15:5; 1 Corinthians 1:30).`,
      `Effectual calling, as the initiatory act, draws the elect irresistibly to Christ, overcoming resistance through divine persuasion (John 6:44; Acts 16:14).
This work reflects the Spirit's role in the triune economy of salvation: proceeding from the Father and the Son, He illuminates Christ's redemptive accomplishment—the propitiation for sins and victory over death—applying it personally to redeem the chosen (Titus 3:5; Romans 8:2-4). Thus, redemption is not abstract but experiential, as the Spirit testifies to Christ's work within, assuring adoption and sealing for the day of redemption (Ephesians 1:13-14; Romans 8:16).`,
      `Beholding this divine application stirs the soul to exalt the Spirit's gracious ministry, who turns enemies into sons, binding them eternally to Christ, and empowers a life of faith-filled obedience, yielding everlasting praise to the Redeemer.`
    ]
  },
  {
    "id": 33,
    "question": "What is our effectual calling?",
    "answer": "Our effectual calling is the work of God’s Spirit in us, to convince us of our sin and misery, to enlighten our minds in the knowledge of Christ, to renew our wills, and thus persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel.",
    "mainScripture": "“No one can come to me unless the Father who sent me draws him. And I will raise him up on the last day. It is written in the prophets, ‘And they will all be taught by God.’ Everyone who has heard and learned from the Father comes to me...” — John 6:44-45",
    "otherScriptures": [
      { "ref": "2 Timothy 1:9", "link": blbLink("2 Timothy 1:9") },
      { "ref": "Ezekiel 36:26", "link": blbLink("Ezekiel 36:26") },
      { "ref": "John 6:44-45", "link": blbLink("John 6:44-45") },
      { "ref": "Acts 2:37", "link": blbLink("Acts 2:37") },
      { "ref": "Acts 26:18", "link": blbLink("Acts 26:18") },
      { "ref": "Romans 8:30", "link": blbLink("Romans 8:30") },
      { "ref": "1 Corinthians 12:3", "link": blbLink("1 Corinthians 12:3") }
    ],
    "explanation": "We must distinguish effectual calling from the general call of the gospel. Not all who hear the gospel believe, but all who are effectually called by God do believe. The call creates what it commands in the one effectually called. 2 Chron 30:9-12 gives us a picture of the hand of God putting a heart of obedience into some of his people, granting them the promised subsequent blessings. In John 6:44-45, we see that Jesus describes effectual calling as God the Father drawing individuals to Himself, enabling them to come to Him for salvation. This divine act involves teaching and enlightening the heart through the Holy Spirit, so that those called respond willingly to the gospel.",
     expandedExplanation: [
      `Effectual calling is the invincible operation of God's Spirit upon the elect, whereby He convicts them of their sin and misery, enlightens their understanding with the truth of Christ, renews their wills, and thereby persuades and empowers them to embrace Jesus as He is freely offered in the gospel. This calling commences with conviction, piercing the heart with the reality of transgression against God's holiness and the ensuing condemnation, evoking godly sorrow that leads to repentance (Acts 2:37; 2 Corinthians 7:10). Next, the Spirit illumines the mind to grasp Christ's sufficiency as Savior—His deity, incarnation, atonement, and resurrection—dispelling ignorance and unbelief (Acts 26:18; Ephesians 1:17-18). Concurrently, He regenerates the will, replacing stony rebellion with fleshy obedience, enabling a wholehearted turning to Christ (Ezekiel 36:26; Deuteronomy 30:6).`,
      `This persuasion is not coercive but liberating, as the Spirit aligns desires with God's offer of mercy, drawing sinners willingly to the Savior (John 6:44-45; 2 Timothy 1:9). Distinct from the general call extended to all through the gospel, effectual calling infallibly produces faith and union with Christ, grounded in God's eternal decree (Romans 8:30; 1 Corinthians 1:9).`,
      `In this wondrous calling, the soul awakens to adore the merciful God who sovereignly summons from death to life, transforming rebels into worshipers, and instilling a lifelong pursuit of holiness in grateful response to His irresistible grace.`
    ]
  },
  {
    "id": 34,
    "question": "What benefits do those who are effectually called receive in this life?",
    "answer": "Those who are effectually called receive in this life, justification, adoption, sanctification and others which accompany or flow from them.",
    "mainScripture": "“And because of him you are in Christ Jesus, who became to us wisdom from God, righteousness and sanctification and redemption, so that, as it is written, ‘Let the one who boasts, boast in the Lord.’” — 1 Corinthians 1:30-31",
    "otherScriptures": [
      { "ref": "Romans 8:30-32", "link": blbLink("Romans 8:30-32") },
      { "ref": "1 Corinthians 6:11", "link": blbLink("1 Corinthians 6:11") },
      { "ref": "Galatians 3:26", "link": blbLink("Galatians 3:26") },
      { "ref": "Ephesians 1:5", "link": blbLink("Ephesians 1:5") }
    ],
    "explanation": "Those who are effectually called receive profound spiritual benefits in this life—justification (being declared righteous through Christ's righteousness), adoption (becoming God's children with full inheritance rights), sanctification (progressive transformation into Christ's likeness), and accompanying graces like assurance, peace, joy, and perseverance—all stemming from union with Christ. These inestimable gifts inspire eternal gratitude, transforming lives from futility to eternal fruitfulness.",
     expandedExplanation: [
      `Those who are effectually called partake in this life of profound spiritual benefits—justification, adoption, sanctification, and the manifold graces that accompany or emanate from them—all flowing from union with Christ through faith. Justification declares the believer righteous in God's sight, imputing Christ's perfect obedience and atoning sacrifice, freeing from guilt and wrath as if sin had never been committed (Romans 3:24-26; 5:1). Adoption elevates the justified to sonship, granting intimate access to the Father, inheritance rights, and the Spirit's witness of belonging (Galatians 4:4-7; Romans 8:15-17). Sanctification progressively conforms the adopted to Christ's likeness, purifying from sin's power through the Spirit's indwelling, enabling holy living and fruitfulness (1 Corinthians 6:11; 2 Thessalonians 2:13).`,
      `These core benefits produce further graces: assurance of God's love, peace amid trials, joy in the Spirit, perseverance in faith, and empowerment for service, all sustaining the believer unto glory (Romans 5:5; 8:30-32; Ephesians 1:3-14).`,
      `Contemplating these invaluable gifts, the heart rises in praise to the bountiful God, whose calling bestows such riches, reshaping lives from futility to fruitfulness, and kindling eternal gratitude and devotion in the redeemed.`
    ]
  },
  {
    "id": 35,
    "question": "What is Justification?",
    "answer": "Justification is the act of God’s free grace, by which he pardons all our sins and accepts us as righteous in his sight, only by the righteousness of Christ imputed to us, and received by faith alone.",
    "mainScripture": "“for all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood, to be received by faith. This was to show God’s righteousness…” — Romans 3:23-26",
    "otherScriptures": [
      { "ref": "2 Corinthians 5:21", "link": blbLink("2 Corinthians 5:21") },
      { "ref": "Galatians 2:16", "link": blbLink("Galatians 2:16") },
      { "ref": "Ephesians 1:7", "link": blbLink("Ephesians 1:7") },
      { "ref": "Philippians 3:9", "link": blbLink("Philippians 3:9") },
      { "ref": "Romans 5:19", "link": blbLink("Romans 5:19") }
    ],
    "explanation": "Only by the imparted righteousness of Christ, by grace, through faith, we can stand before God with a clear conscience and in a position of holiness, because through His imparted righteousness the believer is in right legal standing with God.",
     expandedExplanation: [
      `Justification stands as a cornerstone of God's redemptive work, declaring sinners righteous in His sight through an act of sheer grace, apart from any human merit. At its heart, this doctrine reveals God's judicial pronouncement wherein He pardons all sins—not merely overlooking them, but fully forgiving them as if they had never been committed—rooted in the substitutionary atonement of Christ (Romans 3:23-26). Sin's universal grip leaves humanity guilty and estranged from God's glory, yet in justification, God imputes Christ's perfect righteousness to the believer, crediting Christ's obedience and satisfaction for sin as though it were our own (2 Corinthians 5:21; Romans 5:19). This imputation is not an infusion of righteousness into the soul but a forensic declaration, where God views the believer through the lens of Christ's merit, accepting us as holy and blameless before His throne.`,
      `This gracious act flows solely from God's free favor, unearned and undeserved, highlighting His sovereignty in salvation. No works of the law can contribute, for justification is received by faith alone—a trusting reception of Christ's righteousness that unites us to Him (Galatians 2:16; Philippians 3:9). Faith serves not as a meritorious act but as the instrument through which God's gift is appropriated, echoing Abraham's justification by faith apart from works (Romans 4:3-5). Here, the doctrines of propitiation and redemption converge: Christ, as the mercy seat, absorbs divine wrath in His blood, satisfying justice and enabling God to remain righteous while justifying the ungodly (Romans 3:25; Ephesians 1:7). Thus, justification secures an irreversible standing, shielding believers from condemnation and granting bold access to God.`,
      `In contemplating this truth, the soul is drawn into profound adoration of the God who justifies the wicked, transforming despair into delight. As we rest in Christ's imputed righteousness, our lives reflect this grace through grateful obedience, ever pursuing holiness in response to such unmerited love.`
    ]
  },
  {
    "id": 36,
    "question": "What is adoption?",
    "answer": "Adoption is an act of God’s free grace, by which we are received into the company of God’s children and have a right to all the privileges of his sons.",
    "mainScripture": "“The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs—heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him.” — Romans 8:16-17",
    "otherScriptures": [
      { "ref": "John 1:12", "link": blbLink("John 1:12") },
      { "ref": "Romans 8:16-17", "link": blbLink("Romans 8:16-17") },
      { "ref": "Ephesians 1:5-6", "link": blbLink("Ephesians 1:5-6") },
      { "ref": "1 John 3:1", "link": blbLink("1 John 3:1") }
    ],
    "explanation": "Adoption has always been a part of God’s plan for His elect. It wasn’t an afterthought. Eph 1 tells us that we were predestined for adoption to himself as his children through Christ. It is not based on our fitness, worth or distinctiveness. It is rooted in God’s eternal purpose and grace. That means it is a firm and unshakable reality for the believer.",
     expandedExplanation: [
      `Adoption emerges as a profound expression of God's eternal purpose, wherein He graciously receives sinners into His family, bestowing upon them the full status and privileges of sonship. This act, grounded in free grace, transcends mere legal pardon by establishing an intimate relational bond, making believers co-heirs with Christ and participants in divine fellowship (Romans 8:16-17; Ephesians 1:5-6). Predestined before the foundation of the world, adoption reflects God's unchanging counsel, not human worthiness, ensuring its permanence amid life's trials (Ephesians 1:4-5). Through the Spirit's indwelling, believers experience an internal witness confirming their new identity as children, crying "Abba, Father" in confident communion (Galatians 4:6; 1 John 3:1).`,
      `This filial relationship entails rich privileges: access to God's fatherly care, inheritance of eternal promises, and discipline for growth in holiness (Hebrews 12:5-11; John 1:12). Unlike natural birth, adoption is supernatural, effected through union with Christ, the firstborn Son, whereby God's electing love transforms enemies into beloved offspring (Romans 8:29; Colossians 1:21-22). It underscores divine sovereignty, as God initiates and sustains this bond, weaving it into the fabric of redemption where justification's pardon leads to adoption's intimacy.`,
      `Beholding this grace evokes worship for the Father who lavishes such love, stirring hearts to live as obedient children, secure in His unchanging affection and eager for the inheritance to come.`
    ]
  },
  {
    "id": 37,
    "question": "What is Sanctification?",
    "answer": "Sanctification is the work of God’s free grace by which we are wholly renewed in our person after the likeness of Christ, the image of God, whereby we are enabled more and more to die unto sin and live unto righteousness.",
    "mainScripture": "“But we ought always to give thanks to God for you, brothers beloved by the Lord, because God chose you as the firstfruits to be saved, through sanctification by the Spirit and belief in the truth.” — 2 Thessalonians 2:13",
    "otherScriptures": [
      { "ref": "Romans 6:11", "link": blbLink("Romans 6:11") },
      { "ref": "Romans 8:26-30", "link": blbLink("Romans 8:26-30") },
      { "ref": "Ephesians 4:21-24", "link": blbLink("Ephesians 4:21-24") }
    ],
    "explanation": "Romans 8:28 tells us that, “for those who love God all things work together for good, for those who are called according to his purpose.” Paul then goes on to explain that the good he is talking about is the believer being conformed to the image of His son, Jesus. Every believer carries the promise that God will do this work in them until they reach glory.",
     expandedExplanation: [
      `Sanctification unfolds as God's gracious renewal of the believer's entire being, progressively conforming us to the image of Christ through the Spirit's transformative power. This work, distinct yet inseparable from justification, begins at regeneration and advances throughout life, enabling the believer to die to sin's dominion and live in righteousness (2 Thessalonians 2:13; Romans 6:11). Rooted in God's eternal choice, sanctification involves both definitive and progressive aspects: definitively, believers are set apart as holy in Christ at conversion, breaking sin's absolute rule (1 Corinthians 6:11; Hebrews 10:10); progressively, the Spirit renews the mind, will, and affections after God's likeness, combating indwelling sin through mortification and quickening (Romans 8:29; Ephesians 4:22-24).`,
      `This renewal encompasses the whole person—body, soul, and spirit—restoring the marred image of God distorted by the fall (Colossians 3:10; 1 Thessalonians 5:23). It operates through means of grace, such as Scripture, prayer, and fellowship, as the Spirit applies Christ's victory over sin, empowering obedience amid suffering (Philippians 2:12-13; Romans 8:28-30). Sanctification highlights divine sovereignty in cooperation with human responsibility, where God's promises ensure completion despite setbacks (Philippians 1:6; Jude 24).`,
      `In this divine artistry, praise rises to the Holy One who shapes us for glory, fostering a life of humble dependence and joyful pursuit of godliness, ever reflecting Christ's beauty.`
    ]
  },
  {
    "id": 38,
    "question": "What are the benefits which accompany or flow from justification, adoption and sanctification?",
    "answer": "The benefits which accompany or flow from justification, adoption and sanctification are assurance of God’s love, peace of conscience, fellowship with Christ, joy in the Holy Spirit, the increase of grace, the privilege of prayer and the promise of preservation to the end.",
    "mainScripture": "“Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God… because God’s love has been poured into our hearts through the Holy Spirit who has been given to us.” — Romans 5:1-5",
    "otherScriptures": [
      { "ref": "Proverbs 4:18", "link": blbLink("Proverbs 4:18") },
      { "ref": "John 15:7", "link": blbLink("John 15:7") },
      { "ref": "Romans 14:17", "link": blbLink("Romans 14:17") },
      { "ref": "1 Corinthians 1:9", "link": blbLink("1 Corinthians 1:9") },
      { "ref": "1 Peter 1:5", "link": blbLink("1 Peter 1:5") },
      { "ref": "1 John 5:13", "link": blbLink("1 John 5:13") }
    ],
    "explanation": "There are many ways in which God equips those who have faith in Him. From instilling in us the fruit of the Spirit to equipping us with his spiritual armor, His promises and gifts will always be enough for His people.",
     expandedExplanation: [
      `From justification, adoption, and sanctification flow an array of divine benefits, enriching the believer's communion with God and fortifying life in a fallen world. Assurance of God's love anchors the soul, as the Spirit pours out this certainty, dispelling doubt and affirming our secure standing in Christ (Romans 5:1-5; 1 John 5:13). Peace of conscience follows, silencing accusations through the blood of the Lamb, granting rest amid turmoil (Romans 5:1; Colossians 1:20). Fellowship with Christ deepens this intimacy, inviting shared life and mutual indwelling, where believers abide in Him as branches in the vine (1 Corinthians 1:9; John 15:4-5).`,
      `Joy in the Holy Spirit infuses the heart, a foretaste of eternal delight transcending circumstances, rooted in God's kingdom of righteousness and peace (Romans 14:17; Galatians 5:22). Increase of grace builds upon this foundation, as God supplies strength for growth, maturing faith through trials (Proverbs 4:18; 2 Peter 3:18). The privilege of prayer opens direct access to the throne, with promises of answered petitions in Christ's name (John 15:7; Hebrews 4:16). Finally, preservation to the end seals these blessings, as God's power guards believers through faith unto salvation, ensuring perseverance (1 Peter 1:5; Philippians 1:6).`,
      `These graces evoke worship for the bountiful Giver, transforming believers into vessels of praise, living with confident hope and steadfast devotion.`
    ]
  },
  {
    "id": 39,
    "question": "What are the Sacraments or ordinances?",
    "answer": "The ordinances ordained by Christ, two in number being Baptism and the Lord’s Supper; which are holy signs and seals of the covenant of grace, appointed by Christ to represent Him and His benefits, and to confirm our faith in Him.",
    "mainScripture": "“We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life” — Romans 6:4",
    "otherScriptures": [
      { "ref": "Matthew 26:26-28", "link": blbLink("Matthew 26:26-28") },
      { "ref": "Matthew 28:19", "link": blbLink("Matthew 28:19") },
      { "ref": "Acts 22:16", "link": blbLink("Acts 22:16") },
      { "ref": "1 Corinthians 12:13", "link": blbLink("1 Corinthians 12:13") },
      { "ref": "1 Peter 3:20-21", "link": blbLink("1 Peter 3:20-21") }
    ],
    "explanation": "Baptism and the Lord’s Supper differ from other ordinances of God in that they were specially instituted by Christ to represent and apply to believers the benefits of the new covenant by visible and outward signs. In much the same way that the obedience of the believer is an outward expression of their faith, these ordinances are meant to outwardly express the cleansing of our sins, accomplished in the death and resurrection of Christ that is applied to the believer by faith.",
     expandedExplanation: [
      `The sacraments, ordained by Christ as Baptism and the Lord's Supper, serve as visible signs and seals of the covenant of grace, confirming believers' union with Him and His redemptive benefits. Baptism symbolizes immersion into Christ's death and resurrection, portraying the washing away of sin and the gift of new life, uniting the believer to the body of Christ (Romans 6:4; Matthew 28:19). As an initiatory rite, it outwardly declares inward faith, sealing God's promises of forgiveness and the Spirit's indwelling (Acts 2:38; 1 Peter 3:21). The Lord's Supper, in bread and wine, commemorates Christ's pierced body and shed blood, nourishing faith through remembrance and proclamation of His atoning sacrifice (Matthew 26:26-28; 1 Corinthians 11:23-26).`,
      `These ordinances represent Christ crucified, applying His merits to the conscience and strengthening assurance, while fostering communal testimony (1 Corinthians 10:16-17; Acts 22:16). Instituted solely by divine authority, they are not mere rituals but means whereby God confirms covenant faithfulness, pointing to the new covenant's superiority over the old (Hebrews 8:6-13; Colossians 2:11-12). Administered in obedience, they engage the senses to deepen spiritual realities, guarding against superstition by tethering to Scripture's simplicity.`,
      `In these sacred emblems, adoration swells for the Savior who draws near through them, compelling lives marked by repentance, gratitude, and eager anticipation of His return.`
    ]
  },
  {
    "id": 40,
    "question": "What is Baptism?",
    "answer": "Baptism is a holy ordinance, initiated by Christ, in which immersion in water in the name of the Father, the Son and Holy Spirit, signifies our being united with Christ in His death burial and resurrection as well as us sharing in the benefits of His new covenant of grace",
    "mainScripture": "“Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life. For if we have been united with him in a death like his, we shall certainly be united with him in a resurrection like his” — Romans 6:3-5",
    "otherScriptures": [
      { "ref": "Matthew 28:19", "link": blbLink("Matthew 28:19") },
      { "ref": "Galatians 3:27", "link": blbLink("Galatians 3:27") },
      { "ref": "Colossians 2:12", "link": blbLink("Colossians 2:12") }
    ],
    "explanation": "Baptism is not a simple ceremonial cleansing, but an outward picture/expression of death, burial and resurrection. Baptism, in and of itself, has no saving or cleansing power, but it is an outward appeal to God, that reflects a repentant heart, to be unified with Him through His redemptive work. The word baptism is a transliteration of the Greek word baptismah, which means immersion or submersion, which is reflected in the method in which we administer the ordinance. It is also a one time act.",
     expandedExplanation: [
      `Baptism stands as a sacred ordinance instituted by Christ Himself, serving as the visible sign of initiation into the visible church and the new covenant community. It involves the immersion of the believer in water, performed in the name of the Father, the Son, and the Holy Spirit, symbolizing a profound spiritual reality rooted in the gospel. This act outwardly depicts the believer's union with Christ in His death, burial, and resurrection, as the immersion represents burial with Christ into death, and emergence from the water signifies rising to new life in Him (Romans 6:3-5). Such symbolism draws from the redemptive work of Christ, where His crucifixion and resurrection accomplish salvation, and baptism declares the participant's faith in sharing these benefits.`,
      `Beyond mere ritual, baptism signifies participation in the new covenant of grace, where the old self is crucified with Christ, and the new creation emerges empowered by the Spirit (Galatians 3:27; Colossians 2:12). It echoes the covenant promises fulfilled in Jesus, contrasting with old covenant signs like circumcision, now replaced by this ordinance that testifies to inward regeneration and forgiveness of sins through faith. The triune invocation underscores the involvement of the entire Godhead in salvation: the Father's electing love, the Son's atoning sacrifice, and the Spirit's applying regeneration, all without implying any division in the one essence of God (Matthew 28:19). This ordinance does not confer grace by virtue of the action but serves as an obedient response to Christ's command, publicly professing allegiance to Him and identification with His people.`,
      `In essence, baptism calls believers to live out the reality it portrays, walking in newness of life free from sin's dominion, as those raised with Christ seek things above (Colossians 3:1). Contemplating this truth stirs the heart to gratitude for God's sovereign grace in uniting us to His Son, leading to a life of holiness that glorifies the Triune God and anticipates the fullness of resurrection glory.`
    ]
  },
  {
    "id": 41,
    "question": "To whom is Baptism to be administered?",
    "answer": "Baptism is to be administered to only those who actually profess repentance toward God and faith in, and obedience to, our Lord Jesus Christ.",
    "mainScripture": "“But when they believed Philip as he preached good news about the kingdom of God and the name of Jesus Christ, they were baptized, both men and women.” — Acts 8:12",
    "otherScriptures": [
      { "ref": "Matthew 3:6", "link": blbLink("Matthew 3:6") },
      { "ref": "Mark 16:16", "link": blbLink("Mark 16:16") },
      { "ref": "Acts 2:38", "link": blbLink("Acts 2:38") },
      { "ref": "Acts 8:36", "link": blbLink("Acts 8:36") },
      { "ref": "Acts 10:47-48", "link": blbLink("Acts 10:47-48") }
    ],
    "explanation": "Baptism is an ordinance of the believer. Baptism without faith and repentance is nothing more than an empty gesture at best and misplaced faith at its worst. Infants are not to be baptized because they lack the ability for faith and repentance. Nor is there any scriptural command to baptize them. Furthermore, it is the duty of all those who are baptized to faithfully walk in the commands and ordinances of the Lord as part of the Church, which is beyond the ability of those who do not possess faith and repentance.",
     expandedExplanation: [
      `The administration of baptism is reserved exclusively for those who consciously and credibly profess repentance toward God and faith in the Lord Jesus Christ, ensuring that this ordinance aligns with the inward reality of conversion. Scripture consistently portrays baptism as following upon a personal response to the gospel, where individuals confess their sins, turn from them in repentance, and place their trust in Christ's finished work for salvation (Acts 2:38; Mark 16:16). This prerequisite underscores the nature of baptism as a believer's ordinance, not a rite imposed upon the unregenerate or infants, who cannot yet articulate such faith and repentance.`,
      `Examples abound in the New Testament where baptism immediately succeeds belief: the Ethiopian eunuch, upon understanding the gospel, eagerly seeks baptism as an expression of his newfound faith (Acts 8:36-38); similarly, those in Samaria, both men and women, are baptized after believing the preached word (Acts 8:12). This pattern reflects the covenantal shift from the old to the new, where membership in God's people is not by physical descent but by spiritual rebirth and confession (Matthew 3:6; Acts 10:47-48). Administering baptism without these evidences would dilute its meaning, turning a profound symbol of union with Christ into an empty form, contrary to the apostolic practice.`,
      `Thus, baptism serves as the believer's public declaration of obedience to Christ, marking entry into the fellowship of the church where one commits to disciple-making and holy living. This truth invites profound praise to God for His merciful call to repentance and faith, transforming sinners into saints who joyfully submit to His ordinances and pursue lives reflecting His holiness.`
    ]
  },
  {
    "id": 42,
    "question": "What is the Lord’s Supper?",
    "answer": "The Lord’s Supper is a holy ordinance of the church. By eating the bread and drinking from the cup according to Christ’s appointment, we remember and proclaim his death.",
    "mainScripture": "“For I received from the Lord what I also delivered to you, that the Lord Jesus on the night when he was betrayed took bread, and when he had given thanks, he broke it, and said, “This is my body, which is for you. Do this in remembrance of me.” In the same way also he took the cup, after supper, saying, “This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me.” For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes” — 1 Corinthians 11:23-26",
    "otherScriptures": [
      { "ref": "1 Corinthians 10:16-17", "link": blbLink("1 Corinthians 10:16-17") },
      { "ref": "1 Corinthians 11:23-29", "link": blbLink("1 Corinthians 11:23-29") },
      { "ref": "2 Corinthians 13:5", "link": blbLink("2 Corinthians 13:5") }
    ],
    "explanation": "The Lord’s supper is the second ordinance of the believer initiated by Christ. Those who eat and drink in a worthy manner, partake of Christ’s body and blood, not physically, but spiritually in that they, by faith, are nourished with the benefits he purchased and grow in grace. The worthy manner in which to partake of the Lord’s supper is to examine oneself to make sure he/she is living in faith and repentance. Partaking in a manner unworthy is to bring judgment upon oneself.",
     expandedExplanation: [
      `The Lord's Supper constitutes a perpetual ordinance of the church, instituted by Christ on the eve of His passion, wherein believers partake of bread and wine to commemorate His sacrificial death and proclaim its ongoing significance until His return. The elements—bread broken and cup shared—symbolize Christ's body given and blood shed for the forgiveness of sins, inviting participants to remember the cost of redemption and the establishment of the new covenant (1 Corinthians 11:23-26). This meal transcends mere memorial, fostering spiritual communion with Christ as believers, by faith, feed upon the benefits of His atonement, nourishing their souls in grace and unity with Him (1 Corinthians 10:16-17).`,
      `Participation demands self-examination to ensure one approaches in a worthy manner, discerning the Lord's body and avoiding judgment by treating the Supper profanely (1 Corinthians 11:27-29; 2 Corinthians 13:5). It echoes the Passover's fulfillment in Christ, the Lamb of God, whose once-for-all sacrifice secures eternal redemption, contrasting with repeated old covenant rituals (Hebrews 9:12). The communal aspect binds the church together, reflecting the one body of Christ, where divisions are set aside in favor of mutual love and edification, all under the sovereign headship of the risen Lord.`,
      `In observing the Supper, believers are drawn into deeper adoration of God's wisdom in ordaining such means of grace, stirring hearts to live in light of the cross—forgiven, united, and expectant of Christ's return—thus glorifying Him through transformed lives of gratitude and service.`
    ]
  },
  {
    "id": 43,
    "question": "What benefits do believers receive from Christ at death?",
    "answer": "At death the souls of believers are made perfect in holiness and immediately pass in to glory. Their bodies rest in their graves until the resurrection.",
    "mainScripture": "“For to me, to live is Christ, and to die is gain. But if I go on living in the body, this will mean fruitful labor for me. So what shall I choose? I do not know. I am torn between the two. I desire to depart and be with Christ, which is far better indeed. But it is more necessary for you that I remain in the body.” — Philippians 1:21-24",
    "otherScriptures": [
      { "ref": "Job 19:26", "link": blbLink("Job 19:26") },
      { "ref": "Isaiah 57:2", "link": blbLink("Isaiah 57:2") },
      { "ref": "Luke 23:43", "link": blbLink("Luke 23:43") },
      { "ref": "2 Corinthians 5:8", "link": blbLink("2 Corinthians 5:8") },
      { "ref": "1 Thessalonians 4:14", "link": blbLink("1 Thessalonians 4:14") },
      { "ref": "Hebrews 12:23", "link": blbLink("Hebrews 12:23") }
    ],
    "explanation": "When the believer passes away, their soul will go to be with Christ until the resurrection. Though this will be a place of peace, oneness with Christ and will be far better than here, it is not our final hope, nor our final place. That will come at the resurrection.",
     expandedExplanation: [
      `Upon death, believers experience immediate perfection in holiness as their souls depart to be with Christ in glory, while their bodies await resurrection in the grave. This transition marks the culmination of sanctification begun in life, where the soul, freed from sin's presence, enters into unhindered communion with the Lord, far surpassing earthly existence (Philippians 1:23; 2 Corinthians 5:8). Scripture assures that to be absent from the body is to be present with the Lord, a state of conscious bliss and rest from labors, yet not the final consummation (Luke 23:43; Hebrews 12:23).`,
      `The body's rest in the grave reflects the curse of death due to sin, yet it is temporary, as God sovereignly preserves His people even in dissolution, promising reunion at the resurrection (Isaiah 57:2; 1 Thessalonians 4:14). This intermediate state underscores God's faithfulness to His covenant promises, where believers join the spirits of the just made perfect, awaiting the full redemption of creation (Job 19:26). It highlights the soul's immortality and God's sustaining power, ensuring no separation from His love in life or death (Romans 8:38-39).`,
      `Such truth evokes worship for the God who conquers death through Christ, inspiring believers to live with eternal perspective, finding comfort in the hope that transforms mourning into joyful anticipation of everlasting glory.`
    ]
  },
  {
    "id": 44,
    "question": "What benefits do believers receive from Christ at the resurrection?",
    "answer": "At the resurrection, believers, being raised up in glory, shall be openly acknowledged and acquitted in the day of judgment, and made perfectly blessed in the full enjoyment of God to all eternity.",
    "mainScripture": "“So is it with the resurrection of the dead. What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power.” — 1 Corinthians 15:42-43",
    "otherScriptures": [
      { "ref": "Matthew 10:32", "link": blbLink("Matthew 10:32") },
      { "ref": "Philippians 3:20-21", "link": blbLink("Philippians 3:20-21") },
      { "ref": "1 Thessalonians 4:17", "link": blbLink("1 Thessalonians 4:17") },
      { "ref": "1 John 3:2", "link": blbLink("1 John 3:2") }
    ],
    "explanation": "The resurrection is the final hope of the believer. Phil. 3 reminds us that our citizenship is in heaven and we await our savior, who will transform our lowly bodies to be like his glorious one.",
     expandedExplanation: [
      `At the resurrection, believers will be raised in glorified bodies, publicly vindicated in the judgment, and enter into eternal blessedness in the unmediated presence of God. This event fulfills the promise of transformation, where perishable bodies are sown in weakness but raised imperishable, incorruptible, and powerful, conformed to Christ's glorious body (1 Corinthians 15:42-43; Philippians 3:20-21). Christ's resurrection as the firstfruits guarantees this for all in Him, demonstrating God's sovereign power over death and sin (1 Corinthians 15:20).`,
      `On the day of judgment, believers are openly acknowledged by Christ before the Father, acquitted through His righteousness, and rewarded according to their works, all by grace (Matthew 10:32; 25:34). This acquittal flows from justification by faith, where no condemnation remains, securing their inheritance (Romans 8:1). Thereafter, they enjoy God perfectly, beholding Him as He is, in unending fellowship that satisfies every longing (1 John 3:2; 1 Thessalonians 4:17). This eternal state realizes the ultimate realization of God, where His presence is the ultimate good, free from all evil.`,
      `Reflecting on this ignites praise to the Triune God for His redemptive plan, urging lives of faithfulness that echo into eternity, transformed by the hope of resurrection glory.`
    ]
  },
  {
    "id": 45,
    "question": "What shall be done to the wicked at death?",
    "answer": "The souls of the wicked shall at death, be cast into the torments of hell and their bodies lie in their graves till the resurrection and the great day of judgment.",
    "mainScripture": "“And many of those who sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.” — Daniel 12:2",
    "otherScriptures": [
      { "ref": "Luke 16:23-24", "link": blbLink("Luke 16:23-24") },
      { "ref": "John 5:29", "link": blbLink("John 5:29") },
      { "ref": "Revelation 20:11-15", "link": blbLink("Revelation 20:11-15") }
    ],
    "explanation": "While the resurrection is the final hope of the believer, the final end for the wicked will be an eternity of never ending punishment in hell and the lake of fire. This is not a figurative torment, but a literal physical one that rightly reflects the cost of sinning against the holy creator.",
     expandedExplanation: [
      `The doctrine of the final state of the wicked at death underscores the solemn reality of divine justice and the consequences of sin apart from redemption. Upon death, the souls of those who die in unbelief and rebellion against God are immediately consigned to hell, a place of conscious torment where they experience the preliminary outpouring of God's wrath (Luke 16:23-24). This separation from God's merciful presence is not annihilation but an active suffering, reflecting the holiness of God who cannot abide unrepentant sin. Their bodies, meanwhile, remain in the grave, subject to decay as a result of the curse upon creation due to the fall (Genesis 3:19), awaiting the final resurrection.`,
      `This interim state between death and the resurrection highlights the immortality of the soul, created in God's image and thus enduring beyond physical demise (Ecclesiastes 12:7). The torments of hell are described in Scripture as unquenchable fire and outer darkness, emphasizing both the intensity and isolation of judgment (Matthew 13:42; 25:30). Yet, this is not the ultimate end; it anticipates the great day of judgment when body and soul will be reunited for eternal reckoning (John 5:28-29). The resurrection of the wicked serves God's justice, ensuring that the whole person—body and soul—faces the consequences of a life lived in opposition to the Creator.`,
      `Scripture portrays this as a sobering contrast to the believer's hope, where death leads to immediate presence with the Lord (2 Corinthians 5:8). For the wicked, however, it is a foretaste of eternal separation, underscoring the urgency of the gospel call to repentance and faith in Christ, who alone bore the wrath we deserve (Romans 5:9).`,
      `In contemplating these truths, the heart is drawn to adore the God of perfect justice, whose judgments are righteous and true (Revelation 16:7). This doctrine humbles us, stirring gratitude for salvation in Christ and compelling us to live in holy fear, proclaiming the way of escape from such a fate through the cross.`
    ]
  },
  {
    "id": 46,
    "question": "What shall be done to the wicked at the day of judgment?",
    "answer": "At the day of judgment, the bodies of the wicked, being raised out of their graves shall be sentenced, together with their souls, to unspeakable torments with the devil and his angels forever.",
    "mainScripture": "“...when the Lord Jesus is revealed from heaven with his mighty angels in flaming fire, inflicting vengeance on those who do not know God and on those who do not obey the gospel of our Lord Jesus. They will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might...” — 1 Thessalonians 1:7-9",
    "otherScriptures": [
      { "ref": "Daniel 12:2", "link": blbLink("Daniel 12:2") },
      { "ref": "Matthew 25:41", "link": blbLink("Matthew 25:41") },
      { "ref": "John 5:28-29", "link": blbLink("John 5:28-29") },
      { "ref": "Revelation 20:11-15", "link": blbLink("Revelation 20:11-15") },
      { "ref": "Revelation 21:8", "link": blbLink("Revelation 21:8") }
    ],
    "explanation": "There will come a day, after Jesus returns, where all the people who have ever been will be gathered together before the throne of God to face Judgment. The works of the faithful will be judged, though not condemned, and will pass on into everlasting life. The wicked, however, will face condemnation and everlasting punishment.",
     expandedExplanation: [
      `The day of judgment represents the climactic consummation of God's redemptive plan, where the wicked will face the full measure of divine retribution. On that day, their bodies will be raised from the graves in a resurrection unto condemnation, reuniting with their souls that have already been in torment since death (Daniel 12:2; John 5:28-29). This bodily resurrection ensures that the complete person stands before the throne of God, accountable for every deed, word, and thought committed in defiance of His law (Revelation 20:12-13).`,
      `The sentence pronounced will be one of eternal torment, described as unspeakable anguish in the company of the devil and his angels (Matthew 25:41). This eternal destruction is not cessation of existence but perpetual ruin, away from the presence of the Lord and the glory of His might (2 Thessalonians 1:9). Scripture employs vivid imagery—everlasting fire, the lake of fire—to convey the horror of this state, where the worm does not die and the fire is not quenched (Mark 9:48; Revelation 20:14-15; 21:8). It reflects the infinite offense of sin against an infinitely holy God, demanding infinite punishment.`,
      `This judgment is impartial and a bound to one's works, yet ultimately rooted in rejection of the gospel and the Savior (John 3:18; Romans 2:5-8). The wicked, having suppressed the truth in unrighteousness, will experience the unveiling of God's wrath in its fullness (Romans 1:18). In contrast to the righteous, who are justified by faith and rewarded according to grace, the wicked receive what their deeds deserve, magnifying God's justice (Psalm 9:7-8).`,
      `Reflecting on this awakens awe at the God who will judge the world in righteousness through Christ (Acts 17:31). It transforms us, fostering a life of obedience and evangelism, that others might flee the wrath to come by turning to the Lamb who takes away the sin of the world.`
    ]
  },
  {
    "id": 47,
    "question": "What is the visible (local) church?",
    "answer": "The visible church is the organized society of professing believers, in all ages and places, wherein the gospel is truly preached and the ordinances of Baptism and the Lord’s Supper are administered in true faith.",
    "mainScripture": "“And they devoted themselves to the apostles’ teaching and the fellowship, to the breaking of bread and the prayers...And all who believed were together and had all things in common.” — Acts 2:42,44",
    "otherScriptures": [
      { "ref": "Acts 7:38", "link": blbLink("Acts 7:38") },
      { "ref": "Acts 20:7", "link": blbLink("Acts 20:7") },
      { "ref": "Ephesians 4:11-12", "link": blbLink("Ephesians 4:11-12") }
    ],
    "explanation": "Every visible (local) church is autonomous under the Lordship of Jesus Christ and the authority of His inerrant word. In addition to faithfully administering the two Holy ordinances, the people of the church exercise the gifts, rights and privileges invested in them by the Word of God, they seek to build up the body by working and living together in harmony and they seek to extend the Gospel to the ends of the earth.",
     expandedExplanation: [
      `The visible church manifests God's kingdom on earth as an organized assembly of those who profess faith in Christ, gathered in local congregations across all eras and locations. It is characterized by the faithful preaching of the gospel, which proclaims the person and work of Jesus Christ as the sole means of salvation (Romans 10:14-17) as well as the equipping of the saints for every good work through the word (2 Timothy 3:16-17). This preaching upholds the whole counsel of God, centering on repentance and faith, and is essential for the edification and evangelism of the saints (Acts 20:27).`,
      `Integral to the visible church are the ordinances of baptism and the Lord's Supper, administered in accordance with scriptural mandate. Baptism signifies initiation into the covenant community, symbolizing union with Christ's death, burial, and resurrection (Romans 6:3-4), while the Lord's Supper commemorates His atoning sacrifice, fostering communion among believers and with Christ (1 Corinthians 11:23-26). These are to be observed in true faith, not as mere rituals but as means of grace that strengthen the body.`,
      `The visible church functions as a society devoted to apostolic teaching, fellowship, breaking of bread, and prayer (Acts 2:42). It equips believers for ministry through the gifts of the Spirit, under the leadership appointed by Christ (Ephesians 4:11-12; Acts 20:7). Though composed of professing believers, it may include tares among the wheat, necessitating discipline and purity (Matthew 13:24-30; 18:15-20). Autonomy under Christ's lordship ensures each local body governs itself according to Scripture, free from external hierarchies.`,
      `This doctrine invites worship of the God who dwells among His people, building them into a holy temple (Ephesians 2:21-22). It calls us to active participation, loving one another as members of Christ's body, and extending the gospel's light to a darkened world.`
    ]
  },
  {
    "id": 48,
    "question": "What is the invisible (universal) church?",
    "answer": "The invisible church is the whole number of the elect, that have been, are and shall be gathered together under Christ as its head.",
    "mainScripture": "“And he put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all.” — Ephesians 1:22-23",
    "otherScriptures": [
      { "ref": "John 10:16", "link": blbLink("John 10:16") },
      { "ref": "John 11:52", "link": blbLink("John 11:52") },
      { "ref": "Ephesians 1:10", "link": blbLink("Ephesians 1:10") },
      { "ref": "Colossians 1:18", "link": blbLink("Colossians 1:18") }
    ],
    "explanation": "The invisible (universal) church is the collective elect throughout all history that is destined to be gathered together with Christ for eternity. While we operate and worship within local congregations, every believer is a part of something bigger. We are a part of God’s family. We are His people.",
     expandedExplanation: [
      `The invisible church encompasses the entirety of God's elect, spanning all time—from those who have gone before, to those presently redeemed, to those yet to be called—united under Christ as their sovereign Head. This universal body is not defined by visible structures but by divine election and regeneration, where God sovereignly gathers His chosen ones into eternal fellowship (Ephesians 1:4-5; John 10:16).`,
      `Christ's headship over the church signifies His supreme authority and intimate union with His people, who are His body and the fullness of Him who fills all in all (Ephesians 1:22-23; Colossians 1:18). As Head, He nourishes, governs, and protects the church, ensuring its ultimate glorification. The invisible church is thus the redeemed community predestined to conformity with Christ's image, drawn from every nation, tribe, and tongue (Romans 8:29-30; Revelation 5:9).`,
      `This gathering is accomplished through the Spirit's work, uniting believers across history into one flock under one Shepherd (John 11:52; Ephesians 1:10). It transcends local assemblies, embracing figures like Abraham, David, and the apostles, alongside future saints, all justified by faith in the promised Messiah (Hebrews 11:39-40). The invisible church remains hidden to human eyes, known fully only to God, who searches hearts (1 Samuel 16:7).`,
      `In this truth, we behold the wisdom of the triune God—Father electing, Son redeeming, Spirit sealing—in forming a people for His possession (1 Peter 2:9). It stirs profound gratitude, encouraging perseverance in faith and love for the brethren, as we await the day when the invisible becomes fully visible in eternal glory.`
    ]
  },
  {
    "id": 49,
    "question": "What is the Mission of the church?",
    "answer": "The mission of the church is to faithfully, proactively make disciples both locally and in every corner of the globe.",
    "mainScripture": "“And Jesus said to them, “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.” — Matthew 28:19-20",
    "otherScriptures": [
      { "ref": "Ephesians 3:1-11", "link": blbLink("Ephesians 3:1-11") },
      { "ref": "Romans 15:1-29", "link": blbLink("Romans 15:1-29") },
      { "ref": "Philippians", "link": blbLink("Philippians 2:12–13") }
    ],
    "explanation": "Hudson Taylor once said, “The Great Commission is not an option to be considered; it is a command to be obeyed.” In Jesus giving of the great commission He set the course of his church until His return. The church has been charged with the task of disciple making, and we can either actively take part or live in disobedience.",
     expandedExplanation: [
      `The mission entrusted to the church flows from Christ's sovereign authority, commissioning His followers to make disciples among all peoples, both near and far. This mandate begins with going—proactively engaging the world with the gospel, not waiting passively but advancing intentionally into every sphere of human existence (Matthew 28:18-20; Acts 1:8). Disciple-making involves evangelism, leading souls to faith in Christ through the proclamation of His death and resurrection (1 Corinthians 15:3-4).`,
      `Baptism follows conversion, publicly identifying new believers with the triune God—Father, Son, and Holy Spirit—and incorporating them into the church community. Teaching then ensues, instructing disciples to observe all Christ's commands, encompassing doctrine, ethics, and devotion (Matthew 28:19-20). This holistic formation equips believers to mature in faith, bear fruit, and multiply the mission (Ephesians 4:12-13).`,
      `The church's role in this mission is corporate and perpetual, empowered by Christ's abiding presence until the age's end. It extends God's eternal plan to make known His manifold wisdom through the church to heavenly realms (Ephesians 3:10-11). From local witness to global outreach, as seen in Paul's labors (Romans 15:18-24), the church labors in unity, supporting missionaries and planting congregations (Philippians 1:5; 4:15).`,
      `This divine commission evokes worship for the God who seeks worshipers from every nation (John 4:23-24). It transforms the church into a sent people, living sacrificially for the glory of Christ, hastening His return through faithful obedience to the gospel's advance.`
    ]
  },
  {
    "id": 50,
    "question": "What is Prayer?",
    "answer": "Prayer is an offering up of our desires to God, for things agreeable to his will, in the name of Jesus the Christ, with confession of our sins and thankful acknowledgment of His mercies.",
    "mainScripture": "“do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.” — Philippians 4:6",
    "otherScriptures": [
      { "ref": "1 John 1:9", "link": blbLink("1 John 1:9") },
      { "ref": "1 John 5:14", "link": blbLink("1 John 5:14") },
      { "ref": "Psalm 10:17", "link": blbLink("Psalm 10:17") },
      { "ref": "Psalm 145:19", "link": blbLink("Psalm 145:19") },
      { "ref": "Daniel 9:18", "link": blbLink("Daniel 9:18") },
      { "ref": "John 14:13-14", "link": blbLink("John 14:13-14") },
      { "ref": "John 17", "link": blbLink("John 17") },
      { "ref": "Matthew 5:44", "link": blbLink("Matthew 5:44") },
      { "ref": "Matthew 9:38", "link": blbLink("Matthew 9:38") },
      { "ref": "Matthew 26:41", "link": blbLink("Matthew 26:41") },
      { "ref": "Mark 11:20-26", "link": blbLink("Mark 11:20-26") },
      { "ref": "Ephesians 6:18-20", "link": blbLink("Ephesians 6:18-20") },
      { "ref": "Colossians 4:3-4", "link": blbLink("Colossians 4:3-4") },
      { "ref": "Romans 8:26", "link": blbLink("Romans 8:26") },
      { "ref": "1 Thessalonians 5:17", "link": blbLink("1 Thessalonians 5:17") },
      { "ref": "1 Timothy 2", "link": blbLink("1 Timothy 2:1-15") },
      { "ref": "James 5:13-18", "link": blbLink("James 5:13-18") }
    ],
    "explanation": "God tells his people to pray. He has ordained the faithful prayers of His people to be a means by which He chooses to work in, through and around us. So we can pray in confidence, with passion and with urgency because God determined that He would work through the prayers of his people.",
     expandedExplanation: [
      `Prayer stands as the profound privilege of communion with the living God, where believers present their desires before Him, seeking only those things that align with His sovereign will. This act is not a mere ritual but an intimate expression of dependence, rooted in the reality that God, in His infinite wisdom and goodness, invites His people to participate in His purposes through supplication (Psalm 145:18-19). As creatures made in God's image yet marred by sin, we approach Him not on our own merits but through the mediating work of Jesus Christ, whose perfect obedience and sacrifice open the way for our petitions to be heard (John 14:13-14; Hebrews 4:14-16). In prayer, we confess our sins, acknowledging our unworthiness and the depth of our rebellion against a holy God, while trusting in His promise of forgiveness for those who repent (1 John 1:9; Daniel 9:18). Simultaneously, prayer involves a thankful recognition of God's mercies, recounting His faithfulness in providing for our needs, sustaining creation, and advancing His redemptive plan (Philippians 4:6; Psalm 103:1-5).`,
      `This multifaceted nature of prayer reflects God's relational character—He is the transcendent Creator who condescends to hear the cries of the humble (Psalm 10:17). It encompasses adoration, where we exalt His attributes; intercession, pleading for others as seen in Christ's high priestly prayer (John 17; Ephesians 6:18-20); and supplication for personal needs, all undergirded by the Spirit's aid in our weakness (Romans 8:26). Prayer is not a means to manipulate divine outcomes but a submission to God's decreed will, confident that He works all things for the good of those who love Him (1 John 5:14; Matthew 26:39-42). Whether in times of joy or suffering, believers are called to persist in prayer, as it fosters vigilance against temptation and aligns our hearts with God's kingdom priorities (1 Thessalonians 5:17; Matthew 26:41; James 5:13-18).`,
      `In beholding the essence of prayer, our souls are drawn into deeper awe of the God who not only commands us to pray but delights in our dependence upon Him. This truth transforms us, stirring fervent devotion and a life marked by continual gratitude, as we live in the light of His gracious invitation to cast all our cares upon Him, finding rest in His unchanging faithfulness.`
    ]
  },
  {
    "id": 51,
    "question": "How should we Pray?",
    "answer": "We should pray with an understanding and reverent heart, with humility, with faith, with submission to God’s will, and in the name of Christ alone.",
    "mainScripture": "“And when you pray, do not heap up empty phrases as the Gentiles do, for they think that they will be heard for their many words. Do not be like them, for your Father knows what you need before you ask him. Pray like this: ‘Our Father in heaven, hallowed by your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil” — Matthew 6:7-13",
    "otherScriptures": [
      { "ref": "Psalm 65:2", "link": blbLink("Psalm 65:2") },
      { "ref": "Psalm 145:18", "link": blbLink("Psalm 145:18") },
      { "ref": "John 14:13-14", "link": blbLink("John 14:13-14") },
      { "ref": "Hebrews 11:6", "link": blbLink("Hebrews 11:6") },
      { "ref": "James 1:6-8", "link": blbLink("James 1:6-8") }
    ],
    "explanation": "Prayer is not a performance but an honest and open speaking to our Father. We come boldly, yet reverently, trusting Christ’s mediation.",
     expandedExplanation: [
      `The manner of prayer demanded by Scripture flows from a heart attuned to God's majesty and our own frailty, beginning with understanding that guards against vain repetitions and empty formalism (Matthew 6:7-8). Reverence permeates our approach, recognizing God as the holy, sovereign Father in heaven whose name is to be hallowed above all, evoking a worshipful posture that honors His infinite worth (Psalm 65:2; Isaiah 6:1-3). Humility is essential, as we come not as equals but as sinners redeemed by grace, confessing our unworthiness and yielding to His superior wisdom (Luke 18:9-14; James 4:10). Faith undergirds every petition, believing that God is both able and willing to answer according to His perfect plan, without which our prayers falter in doubt (Hebrews 11:6; James 1:6-8).`,
      `Submission to God's will forms the core of rightful prayer, echoing Christ's own model in the garden, where desires are presented yet surrendered to the Father's decree (Matthew 6:10; 26:39). This submission aligns our requests with divine purposes, seeking first His kingdom and righteousness rather than self-centered demands (Matthew 6:33; 1 John 5:14-15). Crucially, all prayer must be offered in the name of Christ alone, invoking His authority and mediation as the sole intercessor between God and humanity, through whom access to the throne of grace is granted (John 14:13-14; Ephesians 3:12; Hebrews 7:25). Such prayer rejects any reliance on human merits or intermediaries, resting solely in the finished work of the Son.`,
      `Contemplating this divine pattern for prayer awakens profound reverence and joy in the believer's soul, leading to lives of steadfast communion with God. As we pray thus, our hearts are conformed to His image, fostering humility, unwavering trust, and a submission that glorifies Him in every circumstance.`
    ]
  },
  {
    "id": 52,
    "question": "How then should we live in light of these things?",
    "answer": "We should live soberly, righteously and seek to mimic Jesus in this present age, looking forward to our blessed hope of the certain return of our Savior. We should love one another, make disciples of all nations and do all things to the glory of God until Christ’s return.",
    "mainScripture": "“For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.” — Titus 2:11-14",
    "otherScriptures": [
      { "ref": "Matthew 28:18-20", "link": blbLink("Matthew 28:18-20") },
      { "ref": "1 Corinthians 10:31", "link": blbLink("1 Corinthians 10:31") },
      { "ref": "Colossians 3:17", "link": blbLink("Colossians 3:17") },
      { "ref": "1 Thessalonians 5:6-8", "link": blbLink("1 Thessalonians 5:6-8") },
      { "ref": "2 Peter 3:11-14", "link": blbLink("2 Peter 3:11-14") }
    ],
    "explanation": "All doctrine is practical. Since Christ has died for us and will return for us, out of an affection born of grace and mercy, we give ourselves wholly to Him in worship, love, and mission every day we remain on earth.",
     expandedExplanation: [
      `The grace of God in Christ compels believers to a transformed existence in this present age, marked by sobriety that rejects worldly excesses and maintains vigilant self-control amid temptations (Titus 2:12; 1 Thessalonians 5:6-8). Righteousness becomes the pursuit of our lives, as we renounce ungodliness and embody upright conduct that reflects God's holy character, empowered by the indwelling Spirit (Romans 6:11-14; 2 Peter 3:11-14). In imitating Jesus, we emulate His humility, compassion, and obedience, loving others sacrificially and proclaiming the gospel to all nations as commissioned by our risen Lord (Matthew 28:18-20; Philippians 2:5-8). Every action, whether in word or deed, is directed to God's glory, acknowledging that all of life is worship under His sovereign rule (1 Corinthians 10:31; Colossians 3:17).`,
      `This eschatological hope—the certain return of Christ—fuels our perseverance, as we await the appearing of our great God and Savior who redeemed us to be a purified people zealous for good works (Titus 2:13-14; 1 John 3:2-3). Living in light of eternity, we prioritize eternal realities over temporal pursuits, fostering community among believers through mutual edification and love (Hebrews 10:24-25; 1 Peter 1:13-16). Such a life is not a burdensome duty but a joyful response to redeeming grace, where doctrine animates devotion and mission.`,
      `In grasping these truths, our hearts overflow with praise to the God whose grace trains us for godliness and whose promised return inspires holy anticipation. This doctrine reshapes us, cultivating lives of purposeful worship, fervent love, and bold witness until we behold Him face to face.`
    ]
  }
];

// Resources
export const resources = [
      {
    title: "Printable Catechism (PDF)",
    url: "resources/pdfs/catechism-printable.pdf",
    category: "PDFs"
  }
];
  { category: "Ministries", title: "Disciple The Nations", url: "https://disciplethenations.org/" },
  { category: "Ministries", title: "DTN Church Network", url: "https://www.dtnchurchnetwork.org/" },
  { category: "Ministries", title: "Winnie Kate's Kids", url: "https://disciplethenations.org/winnie-kates-kids/" },
  { category: "Tools and Theology", title: "Blue Letter Bible", url: "https://www.blueletterbible.org/" },
  { category: "Tools and Theology", title: "The Chicago Statement on Biblical Inerrancy", url: "https://library.dts.edu/Pages/TL/Special/ICBI_1.pdf" },
  { category: "Tools and Theology", title: "The Nashville Statement: A Coalition for Biblical Sexuality", url: "https://cbmw.org/the-nashville-statement/" },
  { category: "Tools and Theology", title: "The Danvers Statement on Biblical Manhood and Womanhood", url: "https://cbmw.org/about/the-danvers-statement/" },
  { category: "Tools and Theology", title: "The Statement on Social Justice and the Gospel", url: "https://statementonsocialjustice.com/" },
  { category: "Tools and Theology", title: "The London Baptist Confession of Faith (1689)", url: "https://1689londonbaptistconfession.com/" }
];