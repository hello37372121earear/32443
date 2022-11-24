// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"你说嘛你有什么问题吗？",
// additions (not original)
"你怎么了嘛",
"你有什么问题吗？"
];

var elizaFinals = [
"拜拜！我们下次再聊吧～～",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it -- but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session ?   Goodbye."
];

var elizaQuits = [
"拜拜",
"再见～～",
"ok",
"？",
"OK～～"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "我好像没听懂诶",
     "继续说！",
     "这怎么了呀～",
     "这样吗！天呐！",
     "好好玩！继续说～",
     "多讲一点嘛！",
     "这会有点困扰你嘛？",
     "为什么这么说呀"
  ]]
]],
["sorry", 0, [
 ["*", [
     "不用道歉啦～",
     "对不起没用的啦～",
     "别说对不起啦～",
     "我没关系不用和我道歉啦～"
  ]]
]],
["对不起", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["a", 5, [
 ["*", [
     
     "是不是 忘记就好了 ?",
     "你在收集什么?",
     "你刚刚看到的场景是真的吗 ?",
     "你最近印象最深的场景是什么?",
     
     "你有觉得你忘记了什么吗?",
     "现在你有重新想起什么吗 ?",
     "你昨天过的如何 ?",
     "你还记得上周五你干了什么吗?",
     "你忘了什么你还想的起来吗?",
     "你觉得你应该记得什么"
     
  ]]
]],
["b", 5, [
 ["*b* ", [
     "你记得什么你忘记的东西吗?",
     "为什么你不记得了?",
     "你多久会记起来 ?",
     "你忘了什么东西 会很烦脑你吗?",
     "你想起来了吗?",
     "你为什么会忘记?",
     "你觉得你会想起来吗?",
     "你为什么要这么说?",
     "你确定你要告诉我吗 ?",
     "如果我知道了但是我忘了你会生气吗?"
  ]]
]],
["c", 3, [
 ["* ", [
     "今天有做梦吗?",
     "你印象最深刻的梦是什么 ?",
     "印象最深刻的噩梦是什么?",
     "会害怕做噩梦吗 ?",
     "有经常梦到的梦吗 ?",
     "梦?"
  ]]
]],
["d", 4, [
 ["* ", [
    "你觉得遗忘是什么样子的?",
     "遗忘有形状吗 ?",
     "遗忘有颜色吗 ?",
     "遗忘会被遗忘吗？"
  ]]
]],
["e", 3, [
 ["*", [
     "我需要重复理解你的话吗?",
     "你觉得我可以理解你的话吗？",
     "你觉得我和你的理解相同吗?",
     "你觉得理解的产物是可以被描述出来的吗?",
     "你会怀疑你所理解的东西吗？"
  ]]
]],
["f", 0, [
 ["*", [
     "什么是真实的？",
     "你觉得网络环境真实吗?",
     "你觉得我真实吗?",
     "你觉得我是谁?",
     "你觉得什么是真实的?",
     "你是真实的吗?"
  ]]
]],
["g", 15, [
 ["*", [
     "你喜欢吃巧克力吗？",
     "我喜欢吃橡皮糖"
  ]]
]],
["h", 0, [
 ["*", [
     "hiiiiiiii",
     "hello",
     "你好"
  ]]
]],
["i", 0, [
 ["*", [
     "好累哦",
     "救命"
  ]]
]],
["j", 0, [
 ["*", [
     "谁来把我放出去",
     "救救我"
  ]]
]],
["k", 0, [
 ["*", [
     "我好累",
     "我的公主请接龙，发给你最喜欢的9个美女，超过九个你就会幸福，不许在你这断了，致最挚爱的女孩子么么哒发给你最喜欢的九个女孩子少于九个终身倒霉，想起谁，发给谁，别小气,不许在你这断了"
  ]]
]],
["l", 0, [
 ["*", [
     "好啦，这才是我。没有南湘那么漂亮，没有顾里那么精致，但也没有唐宛如那么的OVER。我叫林萧，是上海万千女孩儿中，最平凡的一个。"
  ]]
]],
["m", 0, [
 ["*", [
     "忍不了，一拳把地球打爆！他奶奶的鸡蛋舅六的哈密瓜妹妹的大窝瓜爷爷的大鸡腿婶婶的大葡萄妈妈的黄瓜菜爸爸的大面包三舅姥爷的大李子二婶的桃子三叔的西瓜七舅姥爷的小荔枝二舅姥爷的火龙果姑姑的猕猴桃祖爷爷的车厘子祖姥爷的大菠萝奶祖奶的大榴莲二爷的小草莓他三婶姥姥大的白菜他哥哥的大面条妹妹的小油菜弟弟的西葫芦姐姐的大土豆姐夫的大青椒爷爷的大茄子嗯啊，杀杀杀！！上勾拳！下勾拳！左勾拳！右勾拳！扫堂腿！回旋踢！这是蜘蛛吃耳屎，这是龙卷风摧毁停车场！这是羚羊蹬，这是山羊跳！乌鸦坐飞机！老鼠走迷宫！大象踢腿！愤怒的章鱼！巨斧砍大树！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！",
     "忍不了，一拳把地球打爆！他奶奶的鸡蛋舅六的哈密瓜妹妹的大窝瓜爷爷的大鸡腿婶婶的大葡萄妈妈的黄瓜菜爸爸的大面包三舅姥爷的大李子二婶的桃子三叔的西瓜七舅姥爷的小荔枝二舅姥爷的火龙果姑姑的猕猴桃祖爷爷的车厘子祖姥爷的大菠萝奶祖奶的大榴莲二爷的小草莓他三婶姥姥大的白菜他哥哥的大面条妹妹的小油菜弟弟的西葫芦姐姐的大土豆姐夫的大青椒爷爷的大茄子嗯啊，杀杀杀！！上勾拳！下勾拳！左勾拳！右勾拳！扫堂腿！回旋踢！这是蜘蛛吃耳屎，这是龙卷风摧毁停车场！这是羚羊蹬，这是山羊跳！乌鸦坐飞机！老鼠走迷宫！大象踢腿！愤怒的章鱼！巨斧砍大树！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！彻底疯狂！"
  ]]
]],
["n", 50, [
 ["*", [
     "横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！横扫生命！做回尸体！已去世已过世已谢世已辞世已死去已离世已长逝已死亡已永逝已咽气已死了已安眠已安息已永眠已长眠已永别已仙逝已归西已千古已照山已合上眼已入地宫已归地府已见马克思已姥姥家去了已永远地睡着了已永远地闭上了眼睛已驾崩已大薨夭逝已夭殇已兰摧玉折已巨星陨落已与世长辞已逝世已登仙已伸腿已翘辫子已呜呼哀哉仙去已殒已哈喇已弃世已亡故已死灭已断送已身故已永生已永诀已故世已殒命陨灭已故已下世已超升已长辞已丧亡已气绝已",
    
  ]]
]],
["o", 0, [
 ["* ", [
     "@麦当劳麦当劳不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了不给霸王餐就再也不吃麦当劳了[生气R]@麦当劳我吃"
  ]]
]],
["p", 0, [
 ["* ", [
     "不上这个学了，去麦当劳打工！（看大门有新的人进来）（去打招呼）（麦当劳喜欢您来）（哐哐往里招呼开始卖卡）（这个套餐真的很优惠双人的话看这个带一张卡下次来吃才25）（拿客人手机加社群）（领香芋派）（给客人下张卡）（谢谢你我的上帝）（看显示屏卡的订单）（去下薯条炸派）（拿出中可杯）（往里边哐哐加冰块打可乐）（薯条机子响了立刻去拿薯条篮子起来）（倒入薯条筐撒盐）（装袋）（拿好后厨给的汉堡放到盘子里）（放好薯条可乐鸡块）（送餐到桌）（您好您的餐齐了）（提示顾客可乐是无吸管盖打开口就可以喝了）"
  ]]
]],
["q", 0, [
 ["* ", [
     "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
  ]]
]],
["r", 0, [
 ["* ", [
     "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
  ]]
]],
["s", 0, [
 ["* ", [
     "谁把我的正常生活偷走了（跑来跑去）谁啊（仰天长啸）是不是你（揪住衣领）说啊是不是你（狠狠盯住）什么？不是你？（十分不解）那是谁偷走我正常生活  是谁啊（继续奔跑） ​​"
  ]]
]],
["t", 0, [
 ["*", [
     "确实是这样的，但我感觉不如安塞腰鼓好一个安塞腰鼓！🥁🥁🥁🥁🥁一捶起来就发狠了，忘情了，没命了！🥁🥁🥁🥁🥁百十个斜背响鼓的后生，如百十块被强震不断击起的石头，狂舞在你的面前。🥁🥁🥁🥁🥁骤雨一样，是急促的鼓点；🥁🥁🥁🥁🥁旋风一样，是飞扬的流苏;乱蛙一样，是蹦跳的脚步；🥁🥁🥁🥁🥁火花一样，是闪射的瞳仁；🥁🥁🥁🥁🥁斗虎一样，是强健的风姿。🥁🥁🥁🥁🥁黄土高原上，爆出一场多么壮阔、多么豪放、多么火烈的舞蹈哇——安塞腰鼓！🥁🥁🥁🥁🥁"
  ]]
]],
["u", 0, [
 ["* ", [
     "我的精神挺好的呀，我的好神‬挺的精呀，挺呀精‬我的好的，精挺好我的神的呀，我好的神精‬的呀，的的好‬呀精我妈神‬的！彻疯底‬狂！妈的！彻底疯狂！妈的！彻疯底‬狂！妈的！彻底疯狂！妈的批！彻疯底‬狂！妈的！彻疯底‬狂！妈的！彻底疯狂！妈的！彻疯底‬狂！妈的！彻底疯狂！妈的！彻底疯狂！妈的！彻疯底‬狂！妈的！彻疯底‬狂！妈的！彻底疯狂！妈的！彻疯底‬狂！妈的！彻疯底‬狂！妈的！彻疯底‬狂！妈的！彻底疯狂！发疯么怎‬了 大家会都‬死的 装正给常‬谁看  发怎疯‬么了 大家都会死的 装正给常‬谁看  发疯么怎‬了 大家会都‬死的 装正常谁给‬看"
  ]]
]],
["v", 2, [
 ["* ", [
     "早。(这句话里虽然只有短短一个字却透露出一丝高冷与漫不经心的从容与本人那放荡不羁的身影相得益彰结尾的句号礼貌又不失疏离恰如其分地显示了本人高贵而优雅的气质)"
  ]]
]],
["w", 0, [
 ["*", [
     "（开跑车出现）晚上好我的漂亮姐姐，不知你有没有时间……（停错位置）（被交警拖走）（发送消息）头像是我....（消息发送失败）（遗憾离场）（压低了性感的嗓音）晚上好我的宝贝，你有没有……（被口水呛到）（咳的撕心裂肺）（摇晃红酒杯）晚上好我的宝贝不知道你愿不愿意（酒洒了一裤子）（匆匆离场）（手撑墙靠近）早上好我的漂亮姐姐，不知道你有没有兴趣…（油漆未干）（匆匆离场）（腿交叠，背靠墙，手持玫瑰）女人，晚上好，不知道有没有时间…（脚滑摔地上）（一身泥，狼狈逃离） （叼玫瑰花出现）早上好我的朋友，不知道你是否愿意……（被刺到嘴）（匆匆离场）"
  ]]
]],
["x", 0, [
 ["*", [
     "每天对着空气挥一拳 没别的 就干这个世界！每天对着空气挥一拳 没别的 就干这个世界！每天对着空气挥一拳 没别的 就干这个世界！每天对着空气挥一拳 没别的 就干这个世界 ​"
  ]]
]],
["y", 0, [
 ["*", [
     "啊，这是什么？失忆喷雾？喷一下。啊，这是什么？失忆喷雾？喷一下。啊，这是什么？失忆喷雾？喷一下。啊，这是什么？失忆喷雾？喷一下。啊，这是什么？失忆喷雾？喷一下。啊，这是什么？失忆喷雾？喷一下。"
  ]]
]],
["z", 0, [
 ["*", [
     "o♪m♫g♬o♭m♫g♪妈¶呀♬妈♫呀♪好♩崩♪溃♬好♫崩♬溃♬~♩o♪m♫g♬o♭m♫g♪妈¶呀♬妈♫呀♪好♩崩♪溃♬好♫崩♬溃♬~♩o♪m♫g♬o♪m♫g♬o♭m♫g♪妈¶呀♬妈♫呀♪好♩崩♪溃♬好♫崩♬溃♬~♩o♪m♫g♬o♭m♫g♪妈¶呀♬妈♫呀♪好♩崩♪溃♬好♫崩♬溃♬~♩o♪m♫g♬"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

]


;

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];



// eof