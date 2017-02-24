define(function (){

	var jieguo=new Array()
	jieguo[0] = new Array("特等奖","恭喜你获得一张万能卡，</br>拥有此卡，</br>你可以说出你想做的任何事，</br>你最最温柔可爱的小师妹，</br>会尽最大的努力帮你达成~</br>（可以很污，可以很纯洁，可以很励志o(≥ω≤)o）")
	jieguo[1] = new Array("一等奖","一次性生气抵用券一张~</br>掏出此中奖截图，</br>你最亲爱的小师妹不管多生气，</br>也要冷静下来开开心心地抱住你</br>（如果抱了两分钟气还没消，我也没办法啦）","让你最最亲爱的小师妹配合你做一件羞羞的事情</br>（哦，我也不知道是什么，</br>总觉得作为一个男生，</br>师兄你的脑子里应该会有挺多羞羞的事情的~）")
	jieguo[2] = new Array("二等奖","恭喜你，</br>获得你最可爱的小师妹的亲吻一枚，</br>于21日0：00兑现~</br>（师兄你可以指定亲吻部位<(\"\"\"O\"\"\")> ）","恭喜获得师妹情书一封</br>AND</br>语音情话一条</br>------\\(˙<>˙)/------","当当当~</br>恭喜获得豪华大礼~</br>可以再挑选两个奖品！！！</br>我简直不要太良心~","哇哇哇！！！</br>这是我最期待的奖品啦~</br>我灵机一动想到的，</br>简直不要太机智~</br>21日角色扮演兄妹一天~</br>你的妹妹不可能这么可爱~")
	jieguo[3] = new Array("三等奖","告诉你一个我一直不好意思说的小秘密~</br>其实在你请我看电影之前，</br>我们第一次南校区回来之后，</br>我有梦到你成了我的男朋友(O ^ ~ ^ O)","当当当~</br>恭喜你中奖啦哈哈哈哈，</br>虽然只是小小的一个抱抱（不过你可以指定怎么抱啊(￣▽￣)~* ）","和你在一起以后，</br>才知道原来谈恋爱可以这么幸福快乐。</br>只要想到你，</br>就控制不住地嘴角上扬。","其实我那时跑去咨询权叔，</br>权叔说到肢体接触的时候，</br>我整个人都在想：</br>我的天呐，肢体接触，好恐怖~</br>好的，后来发现，</br>原来我这么喜欢和你肢体接触</// \\\\\\>","我在火车站成功错过火车后，</br>你打电话给我的时候，</br>我就在想，</br>就是他了，</br>不会再有别人~","想把你惯坏，</br>给你一个最好最舒心的女朋友，</br>然后你就会再也找不到比我更好的女朋友了，</br>哪都去不了，</br>手动点赞~","啊~想了很久没想出来写啥，</br>毕竟我实在是有啥说啥不会藏话T_T</br>就在这里告诉你一件很羞耻的事吧：</br>其实在我的梦里，</br>我已经把你扑倒然后.....</br>后续继续抽吧，哈哈哈哈哈~","接上条~，</br>嗯，不要想得太羞耻了，</br>我还不会有那么大尺度的~</br>我只是梦到我扒开了你的上衣，</br>然后，露出了你的胸膛，</br>然后亲了上去~（捂脸）")
	jieguo[4] = new Array("再接再厉，加油~","你肯定是偷偷作弊了，</br>不然怎么在我心里得了满分","最棒的安全感就是，</br>知道你嘴上对我的任何嫌弃，</br>都是基于喜欢。 ","我想给你写一封情书，</br>用七十年代的牛皮纸包住，</br>字里行间不用太多矫情的词汇，</br>也不用增加气氛的排比句，</br>只是简单的陈述天气季节，</br>然后再慢慢告诉你：我真的很喜欢你。","世界上永远没有无缘无故的爱，</br>只是有些原因你不能明白我没有坦白，</br>或许是相遇时你恰好笑了或许是你皱眉了，</br>所以我爱了所以我来了。","你是我的，</br>我是你的，</br>只是一首太温柔的歌。","你说的每句漫不经心的话，</br>全在我心上开成漫山遍野的花。","你问我多喜欢你，</br>我说不出来，</br>但我心里明白，</br>我宁愿与你吵架，</br>也不愿去爱别人。","遇见你的时候，</br>感觉自己变成了一瓶雪碧，</br>一下被拧开，滋啦，</br>全身都冒着幸福的亮晶晶的小泡泡。","别人的热闹那么拥挤，</br>我有你肩并肩，</br>安安静静正好。","等你说想我的时候，</br>我就去抱紧你。","这里荒芜寸草不生，</br>后来你来这走了一遭，</br>奇迹般万物生长，</br>这里是我的心♡","一张嘴就是你的名字，</br>一闭眼就是你的样子。","我想说的话，</br>很多时候都不知道怎么表达，</br>爱总是藏在眼睛里，</br>你却不知道它也藏在这句首里。","你是年少的欢喜，</br>倒过来念，</br>说的也是你。","我给你讲个故事吧：</br>我喜欢你。</br>完</br>你看，从头到尾都是。","我喜欢你，</br>没有压力，</br>无关利益，</br>只因为你，</br>真好","希望陪你，</br>无论是在长大或是老去。","我只想牵着你的手，</br>和你走到暮雪白头的那一天。","遇到你，</br>就觉得生活一下子不艰难了，</br>晚风也好，凉夜也罢，</br>都想笑。","所爱隔山海，山海不可平。</br>海有舟可渡，山有径可行。</br>此爱翻山海，山海皆可平。","我所有的温暖和宽容，</br>拥抱和撒娇，</br>眼泪和笑容，</br>好坏脾气和孩子气都给了你。","春水初生，</br>春林初盛，</br>春风十里，</br>不如你","很多东西看久了都会腻，</br>唯独你，</br>越看越欢喜。","你是海，是归船，</br>是遍山翠藤，</br>是诗人的眼泪，</br>是黄昏树梢上挂着的那朵夕阳，</br>是这世间所有美好事物的代表。","愿有岁月可回首，</br>且以深情共白头。","我想用余生为你暖一盏茶，</br>晚风微扬时勿忘归家","情话是我抄的，</br>但想说给你听是真的。","我没有很刻意的去想念你，</br>我只是在很多很多的小瞬间，</br>想起你，</br>比如一部电影，一首歌，一句歌词，</br>一条马路和无数个闭上眼睛的瞬间。","如果我就这么，</br>一年一年的爱下去，</br>是不是就成了你的一辈子。","养一只狗，</br>再养个你，</br>没事，</br>逗逗狗，</br>再睡睡你。","我可以和一百个人做朋友，</br>和十个人微笑，</br>但我的心只给你一个人。","最开始的时候想当英雄，想变超人，</br>想成为被光环围绕的很厉害的人，</br>后来啊，</br>后来只想做一个普通人，</br>养一只狗，</br>有一个小房子和一个爱人","你喜欢橘子还是芒果？</br>喜欢橘子。</br>我就是橘子。</br>嗯，我喜欢你。","给你颗糖，</br>你可以跟我走吗？</br>不行的话，</br>我就再给你一颗。","外面风很大，</br>请关好门窗，</br>万一我被吹到你家里，</br>我是不会走的。","我跟你讲，我就是小醋王。</br>你先考虑好要不要靠近我吧，</br>等你跟我熟了，</br>你就只能喜欢老子，</br>再靠近别的女孩子，</br>我酸死你。","在万马齐喑的回忆里，</br>在众人绵长的呼吸间，</br>我最喜欢你。","一直以为可以很酷，</br>走路带风，从不拖泥带水。</br>可是啊，</br>只要看你一眼，</br>我连酷字怎么写都忘记了","我愿做你的小尾巴，</br>你走到哪我就随到哪，</br>与你共赏长河落日，</br>与你漫步江南烟雨，</br>生命一世，</br>我都要跟着你，</br>跟你走遍天涯。","你穿行于我的梦中一尘不染，</br>多想走遍这世间千山万水，</br>千山是你，万水也是你；</br>去程是你，归途也是你。","春天的鲜花开满了墙，</br>你是我的如愿以偿。","对的人要晚一点遇到，</br>但是也不要太晚，</br>希望你出现的时候，</br>我们已经成熟的可以理智的计划彼此的未来，</br>也年轻到对遇见了解依然怀有热泪盈眶的感激。","道理我都懂，</br>可是我要的不是道理，</br>是你。","喜欢温和的风，</br>喜欢安静的人，</br>喜欢空旷的角落，</br>喜欢干净的白开水，</br>喜欢有你在身边。","我爱你，</br>如鲸向海，</br>鸟投林，</br>不可避免，</br>退无可退。","我想抱你还想摸你，</br>如果你不服，</br>可以亲我一口。","遇见你，</br>到爱上你，</br>只应了一句话，</br>四个字：命中注定。","牵你的手，朝朝暮暮，</br>牵你的手，等待明天，</br>牵你的手，走过今生，</br>牵你的手，生生世世。","见了他，</br>她变得很低很低，</br>低到尘埃里。</br>但她心里是欢喜的，</br>从尘埃里开出花来。","听到一些事，</br>明明不相干的，</br>也会在心中拐几个弯想到你。","人生最大的幸福，</br>是发现自己爱的人正好也爱着自己。","未来很长，</br>慢慢走，</br>我们一起。","如果全世界都对你恶意相加，</br>我就对你说上一世情话。","最好的爱情大概就是，</br>我崇拜你像个英雄，</br>你疼爱我像个孩子。","他说的“让她三分”，</br>不是“三分流水七分尘”的“三分”，</br>是“天下只有三分月色”的“三分”。","记得当时年纪小，</br>你爱谈天我爱笑。</br>有一回我们并肩坐在桃树下，</br>风在林梢鸟儿在叫。</br>我们不知怎样睡着了，</br>梦里花落知多少。","爱是帮助了解的力，</br>了解是爱的成熟。</br>最高的了解是灵魂的化合，</br>那是爱的圆满功德。","我们得互相体谅，</br>在你我间的一切都得从一个爱字流出。</br>我一定听你的话，</br>你叫我几时回南我就几时回南，</br>你叫我几时往北我就几时往北。","一切有我在，</br>一切有爱在。","世界上好人不少，</br>不过你是最重要的一个。</br>你要是愿意，</br>我就永远爱你，</br>你要是不愿意，</br>我就永远相思。","我现在已经养成了一种习惯，</br>就是每三二天就要</br>找你说几句不想对别人说的话。")

	var clickDan = function(){
		//判断是否未登录
		//var isTrue = $('.tishiChouJiang span').hasClass('loginSpan');
		//if (isTrue) {
		//	alertLogin();
		//}else{
		clickJinDanView();
		//}
	}

	var jiangPinResult = function(){
		var num0 = Math.random()*89;
		num0 = parseInt(num0, 10);
		if (num0 == 6)
			num0 = 0;
		else if(num0==9||num0==19||num0==29||num0==39)
			num0 = 1;
		else if(num0==0||num0==10||num0==20||num0==30||num0==49||num0==59)
			num0 = 2;
		else if(num0==3||num0==13||num0==23||num0==35||num0==43||num0==53||num0==69||num0==79||num0==88)
			num0 = 3;
		else
			num0 = 4;

		var num1 = Math.random()*(jieguo[num0].length-1);
		num1 = parseInt(num1, 10);
		if (num1 == 0)
			num1 = jieguo[num0].length-1;

		var str = '';
		str += '<div class="bg-mask"></div>';
		str +='<div class="jiangPinResult">';
		str +='<img class="gongxi" src="./static/images/ys2.png">';
		str = str + '<p style="margin:20px 0;font-size:20px;line-height:30px;">' + jieguo[num0][0] + '</br></br><span style="font-size:17px">'+jieguo[num0][num1]+'</span></p>';
		str +='<a href="#"><input class="btn_Get" value="凭截图兑换奖品哦~" type="button"></a>';
		str +='<img class="colseJiangPin" src="./static/images/close.png" alt="关闭" title="关闭">';
		str +='</div>';

		$('body').css({'overflow':'hidden'});
		$('body').prepend(str);

		setTimeout(function(){
			$('.jiangPinResult').addClass('active');
		},200);
	}

	var alertAdd = function(){
		var str = '';
		str += '<div class="bg-mask"></div>';
		str += '<form class="adds" action="/" method="post"><div class="inputInfo">';
		str += '<img class="colseLogin" src="./static/images/close.png" alt="关闭">';
		str += '<p class="inputInfoTitle">快来添加情话吧~~</p>';
		str += '<div class="userNameDiv">';
		str += '<label for="nameInput">要添加的奖项:</label>';
		str += '<input class="nameInput" name="nameInput" id="nameInput" type="text">';
		str += '</div>';
		str += '<div class="phoneDiv">';
		str += '<label for="phoneInput">添加的内容:</label>';
		str += '<input class="phoneInput" name="phoneInput" id="phoneInput" type="text">';
		str += '</div>';
		str += '<input class="submitTijiao" type="submit" value="提交">';
		str += '</div></form>';

		$('body').css({'overflow':'hidden'});
		$('body').prepend(str);

		setTimeout(function(){
			$('.inputInfo').addClass('active');
		},200);
		
		//点击提交
		$('.submitTijiao').click(function(){
			var phoneNumber = $('.phoneInput').val();
			var userName = $('.nameInput').val();
			if(phoneNumber===''||userName===''){
				alert('信息不能为空！');
				return false;
			}else if(userName != 'tedengjiang' && userName != 'yidengjiang' && userName != 'erdengjiang' && userName != 'sandengjiang' && userName != 'anweijiang'){
				alert('奖项名称错误！');
				return false;
			}else{
				$('.adds').submit();
				return true;
			}
		});
	}


	var isRightPhoneNumber = function(val){
		var re=/^(13[0-9]{9})|(15[0-9][0-9]{8})|(18[0-9][0-9]{8})|(17[0][0-9]{8})|(14[7][0-9]{8})$/;   
		if(!re.test(val)){      
			return 0;
		}else{
			return 1;
		}
	}

	var clickJinDanView = function(){
		var str = '';
		str += '<div class="bg-mask"></div>';
		str +='<div class="chouJiang">';
		str +='<p class="chouJiangTishi">来看看师兄今天的运气怎么样~~~</p>';
		str +='<img class="caiDai" src="./static/images/caidai.png" alt="彩带">';
		str +='<img class="imgDan" src="./static/images/cd1.png" alt="彩蛋">';
		str +='<img class="imgChuiZi" src="./static/images/chuizi.png" alt="锤子">';
		str +='</div>';

		$('body').css({'overflow':'hidden'});
		$('body').prepend(str);

		setTimeout(function(){
				$('.bg-mask').remove();
				$('.chouJiang').remove();
				jiangPinResult();
			},4500);
	}

	return{
		clickDan:clickDan,  //敲击蛋判断是否登录
		jiangPinResult:jiangPinResult, //显示奖品的弹窗
		alertAdd:alertAdd,   //提示输入用户名
		isRightPhoneNumber:isRightPhoneNumber,   //验证电话号码
		clickJinDanView:clickJinDanView,    //显示敲击金蛋效果
	}
});
