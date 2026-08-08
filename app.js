var DEFAULT_DATA = {
  dailyLog: [],
  mainQuests: [
    { id: "q1", category: "冒险课/关系课营销套", title: "关系课录掉10（2.7）", points: 20, done: false },
    { id: "q2", category: "冒险课/关系课营销套", title: "冒险课研发更新日志6（2.10）", points: 10, done: false },
    { id: "q3", category: "冒险课/关系课营销套", title: "998勇冒会员详情页", points: 10, done: false },
    { id: "q4", category: "冒险课/关系课营销套", title: "冒险课3天体验营", points: 20, done: false },
    { id: "q5", category: "AI系统+AI课", title: "商业模式叙事", points: 0, done: false },
    { id: "q6", category: "AI系统+AI课", title: "ROI决策系统叙事", points: 0, done: false },
    { id: "q7", category: "AI系统+AI课", title: "情报系统叙事", points: 0, done: false },
    { id: "q8", category: "AI系统+AI课", title: "磨课内容生产系统叙事", points: 0, done: false },
    { id: "q9", category: "AI系统+AI课", title: "营销内容生产系统叙事", points: 0, done: false },
    { id: "q10", category: "AI系统+AI课", title: "日常管理系统叙事", points: 0, done: false },
    { id: "q11", category: "AI系统+AI课", title: "环节迭代系统叙事", points: 0, done: false },
    { id: "q12", category: "15个行动副本营销套", title: "做一个个人IP", points: 3, done: false },
    { id: "q13", category: "15个行动副本营销套", title: "如何执行长期项目：写论文/报告/策划", points: 3, done: false },
    { id: "q14", category: "15个行动副本营销套", title: "探索一次陌生新领域（世界好奇清单）", points: 0, done: false },
    { id: "q15", category: "15个行动副本营销套", title: "探索一次自己的副业", points: 0, done: false },
    { id: "q16", category: "15个行动副本营销套", title: "探索一次找实习", points: 3, done: false },
    { id: "q17", category: "15个行动副本营销套", title: "试一次小红书变现", points: 0, done: false },
    { id: "q18", category: "15个行动副本营销套", title: "做一次系统性复盘", points: 0, done: false },
    { id: "q19", category: "15个行动副本营销套", title: "做一个AI智能体", points: 0, done: false },
    { id: "q20", category: "15个行动副本营销套", title: "做一个AI求职教练", points: 0, done: false },
    { id: "q21", category: "15个行动副本营销套", title: "空匣：锻炼你的想象力", points: 0, done: false },
    { id: "q22", category: "15个行动副本营销套", title: "尝试一次交换人生", points: 3, done: false },
    { id: "q23", category: "15个行动副本营销套", title: "做一个个人演说轻播客", points: 0, done: false },
    { id: "q24", category: "15个行动副本营销套", title: "探索一次销售：销售自己的个人演说会", points: 0, done: false },
    { id: "q25", category: "15个行动副本营销套", title: "创造一个成长游戏地图：如何打破成长瓶颈", points: 0, done: false },
    { id: "q26", category: "15个行动副本营销套", title: "创造一个AI解决问题教练手册", points: 0, done: false },
    { id: "q27", category: "关系篇的行动副本", title: "给你亲人写一篇人生传记", points: 0, done: false },
    { id: "q28", category: "关系篇的行动副本", title: "情绪海龟汤-关系篇", points: 0, done: false },
    { id: "q29", category: "关系篇的行动副本", title: "信用盲盒传递赛", points: 0, done: false },
    { id: "q30", category: "关系篇的行动副本", title: "绘制一份高德美食地图", points: 0, done: false },
    { id: "q31", category: "关系篇的行动副本", title: "尝试一次帮人解决问题万能法", points: 0, done: false },
    { id: "q32", category: "关系篇的行动副本", title: "信用盘点夜", points: 0, done: false },
    { id: "q33", category: "15个冒险篇的行动副本", title: "做一个个人IP", points: 2, done: false },
    { id: "q34", category: "15个冒险篇的行动副本", title: "如何执行长期项目：写论文/报告/策划", points: 2, done: false },
    { id: "q35", category: "15个冒险篇的行动副本", title: "探索一次陌生新领域（世界好奇清单）", points: 2, done: false },
    { id: "q36", category: "15个冒险篇的行动副本", title: "探索一次自己的副业", points: 2, done: false },
    { id: "q37", category: "15个冒险篇的行动副本", title: "探索一次找实习", points: 2, done: false },
    { id: "q38", category: "15个冒险篇的行动副本", title: "试一次小红书变现", points: 2, done: false },
    { id: "q39", category: "15个冒险篇的行动副本", title: "做一次系统性复盘", points: 2, done: false },
    { id: "q40", category: "15个冒险篇的行动副本", title: "做一个AI智能体", points: 2, done: false },
    { id: "q41", category: "15个冒险篇的行动副本", title: "做一个AI求职教练", points: 2, done: false },
    { id: "q42", category: "15个冒险篇的行动副本", title: "空匣：锻炼你的想象力", points: 2, done: false },
    { id: "q43", category: "15个冒险篇的行动副本", title: "尝试一次交换人生", points: 2, done: false },
    { id: "q44", category: "15个冒险篇的行动副本", title: "做一个个人演说轻播客", points: 2, done: false },
    { id: "q45", category: "15个冒险篇的行动副本", title: "探索一次销售：销售自己的个人演说会", points: 2, done: false },
    { id: "q46", category: "15个冒险篇的行动副本", title: "创造一个成长游戏地图：如何打破成长瓶颈", points: 2, done: false },
    { id: "q47", category: "15个冒险篇的行动副本", title: "创造一个AI解决问题教练手册", points: 0, done: false }
  ],
  roulettes: {
    "运动转盘": { cost: 5, items: ["10分钟站桩/拉伸，立刻执行","户外走路20分钟，顺便买一瓶喜欢的饮料","白天出门晒太阳15分钟，只要求出门","按摩仪/筋膜球/热敷放松15分钟","泡脚20分钟，顺便听音乐/播客","做一次10分钟呼吸训练或冥想","完成一次15分钟家庭跟练","一节瑜伽/普拉提/拉伸课","一次体脂测量、体态评估或基础健康检查","体育纪录片 + 一份健康零食/水果","买一瓶运动饮料、蛋白奶或无糖饮品","运动装备基金50元：袜子、护腕、跳绳、筋膜球等","找一个公园/河边/校园/街区走路40分钟","预约一次新运动体验课，预算100-200元","约朋友一起散步、羽毛球、飞盘、骑行或其他轻运动1小时","一次专业按摩、SPA、理疗或采耳放松，预算200-300元","设计一次半日徒步/骑行/城市远走计划，并在3天内执行","大奖：新运动体验券，预算300-500元"] },
    "美食转盘": { cost: 5, items: ["买一份今天最想吃的水果","点一份真正想吃的外卖，不凑合","买一份没吃过的新零食","喝一杯想试很久的奶茶/咖啡/饮品","买一份特色甜品，认真吃完","去吃一次日料/韩餐/东南亚单人套餐","去吃一次火锅/烧烤/烤肉","探一家收藏过但一直没去的小店","买一种地方特色美食尝一尝","随机购买3种陌生食材，创作一道菜","做一顿有仪式感的早餐/夜宵","体验一次线上烹饪课或跟做菜谱","美食纪录片 + 配套小吃观影","请朋友一起吃一顿轻松饭","去一家评分不错的小馆子吃招牌菜","买一份高品质食材：牛排、三文鱼、芝士或时令水果","安排一次自助餐/小型放题","大奖：美食探索基金，预算300-500元"] },
    "好奇心转盘": { cost: 5, items: ["打开世界好奇清单，随机探索一个条目15分钟","看一个陌生主题TED演讲或公开课","线上逛一次博物馆/美术馆/大学公开展","查清楚一个今天突然好奇的问题，并写下3句话","了解5个冷知识，挑一个讲给别人听","随机连接两个不相关概念，写出一个新点子","买一本纸质书或电子书，预算20-50元","体验一次线上大师课/知识课程单节","买一份科学实验/手作/模型小套装，预算100元以内","去一次天文馆、科技馆、博物馆或展览","请教一个人：他的专业、职业或生活经验","参加一次线下工作坊、分享会或沙龙","进行一次同城短途探索：一条街、一个园区或一个展","学习一个完全无关领域的小技能30分钟","看一部纪录片，并记录3个新发现","了解一个陌生人的职业或生活故事","研究一项前沿科技/新工具，并写300字总结","大奖：好奇心远征券，预算300-500元"] },
    "游戏转盘": { cost: 5, items: ["玩一局最想玩的游戏，限时60分钟","尝试一款没玩过的独立游戏Demo","通关一个短流程游戏或一个章节","完成一个游戏里的支线任务/隐藏挑战","玩一次桌游或卡牌游戏体验包","约朋友线上开黑/联机1小时","组织或参加一次线下游戏局","去一次电竞馆/主机馆体验","一次VR游戏体验30分钟","租赁或体验一款主机游戏","买一个小额游戏DLC/皮肤/通行证","买一个游戏周边/设定集/手办小物","去一家游戏主题咖啡厅或电玩城","看一场电竞比赛/速通/游戏纪录片","写一段100字游戏体验记录：哪里好玩","用RPG Maker/Construct/AI工具做一个小游戏雏形","参加游戏展/动漫展/线下活动","大奖：游戏体验基金，预算300-500元"] }
  },
  levelRewards: [
    { lv: 1, need: 0, reward: "奖励一次随机转盘", claimed: true },
    { lv: 2, need: 10, reward: "100元美食线下探索基金", claimed: true },
    { lv: 3, need: 30, reward: "各转盘奖励一次", claimed: false },
    { lv: 4, need: 60, reward: "300元出去玩基金（杭州）", claimed: false },
    { lv: 5, need: 100, reward: "500元出去玩旅游基金（徐州）", claimed: false },
    { lv: 6, need: 150, reward: "200元AI工具基金", claimed: false },
    { lv: 7, need: 210, reward: "800元出去玩旅游基金", claimed: false },
    { lv: 8, need: 280, reward: "1000元出去旅游基金", claimed: false },
    { lv: 9, need: 360, reward: "还没想好", claimed: false },
    { lv: 10, need: 450, reward: "还没想好", claimed: false }
  ],
  spinHistory: [],
  dailyTodos: [],
  mainMinutesTotal: 0,
  dailyMinutesTotal: 0,
  balance: 0,
  rouletteContentVersion: "all-roulette-v1",
  balanceResetVersion: "52-fix-v2"
};

var data = JSON.parse(JSON.stringify(DEFAULT_DATA));
var previousLevel = -1;

function saveData() { localStorage.setItem("growth_system_data", JSON.stringify(data)); }
function normalizeDailyLog(){data.dailyLog=(data.dailyLog||[]).map(function(item){if(!item.kind)item.kind="daily";if(item.kind==="main"&&typeof item.pointsDelta!=="number")item.pointsDelta=0;return item})}
function recalcMainMinutesTotal(){data.mainMinutesTotal=(data.dailyLog||[]).filter(function(item){return item.kind==="main"}).reduce(function(sum,item){return sum+(item.clockCount||0)},0)}
function recalcDailyMinutesTotal(){data.dailyMinutesTotal=(data.dailyLog||[]).filter(function(item){return item.kind==="daily"}).reduce(function(sum,item){return sum+(item.clockCount||0)},0)}
function loadData() {
  var saved = localStorage.getItem("growth_system_data");
  var savedRouletteContentVersion = "";
  if (saved) { try { var p = JSON.parse(saved); savedRouletteContentVersion = p.rouletteContentVersion || ""; data = Object.assign(JSON.parse(JSON.stringify(DEFAULT_DATA)), p); } catch(e) {} }
  normalizeDailyLog();
  recalcMainMinutesTotal();recalcDailyMinutesTotal();
  if(savedRouletteContentVersion!=="all-roulette-v1"){["运动转盘","美食转盘","好奇心转盘","游戏转盘"].forEach(function(type){data.roulettes[type]=JSON.parse(JSON.stringify(DEFAULT_DATA.roulettes[type]))});data.rouletteContentVersion="all-roulette-v1";saveData()}
  if(data.balanceResetVersion!=="52-fix-v2"){data.balance=52;data.balanceResetVersion="52-fix-v2";saveData()}
}

function calcDailyPoints() { return Math.floor((data.mainMinutesTotal||0)/50) + Math.floor((data.dailyMinutesTotal||0)/1200); }
function calcMainPoints() { return data.mainQuests.filter(function(q){return q.done}).reduce(function(s,q){return s+(q.points||0)},0); }
function calcTotalPoints() { return calcDailyPoints()+calcMainPoints(); }
function calcLevel(t) { return Math.floor((Math.sqrt(1+4*t/5)-1)/2); }
function calcNextLevelPts(t,l) { return (l+1)*10-(t-5*l*(l+1)); }
function calcLevelPoints(l) { return 5*l*(l+1); }

function updateStats() {
  var t=calcTotalPoints(), lv=calcLevel(t), np=calcNextLevelPts(t,lv);
  document.getElementById("totalPoints").textContent=t;
  document.getElementById("currentLevel").textContent="Lv."+(lv+1);
  document.getElementById("nextLevelPts").textContent=Math.max(0,np);
  document.getElementById("balance").textContent=Math.max(0,data.balance||0);
  if(previousLevel>=0&&lv>previousLevel){showLevelUpModal(lv+1)}
  previousLevel=lv;
}

function pad2(n){return n<10?"0"+n:""+n}
function getLocalDateString(d){d=d||new Date();return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate())}
function getLocalTimeString(d){d=d||new Date();return pad2(d.getHours())+":"+pad2(d.getMinutes())}
function parseTimeToMinutes(t){if(!t)return 0;var p=t.split(":");return (parseInt(p[0])||0)*60+(parseInt(p[1])||0)}
function formatMinutesToTime(mins){mins=((mins%1440)+1440)%1440;var h=Math.floor(mins/60),m=mins%60;return pad2(h)+":"+pad2(m)}
function formatDurationLabel(mins){mins=Math.max(0,mins||0);if(mins>=60){var h=Math.floor(mins/60),m=mins%60;return h+"小时"+(m?m+"分钟":"")}return mins+"分钟"}
function escapeHtml(text){return String(text||"").replace(/[&<>"]/g,function(ch){var map={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"};return map[ch]})}
function getDailyEntriesForDate(date){return data.dailyLog.filter(function(item){return item.date===date})}
function getLastEndMinutes(date){var items=getDailyEntriesForDate(date).filter(function(item){return item.endTime});if(!items.length)return 0;return items.reduce(function(max,item){return Math.max(max,parseTimeToMinutes(item.endTime))},0)}
function updateDailyDraftTimes(){var date=document.getElementById("dailyDate").value||getLocalDateString();var now=new Date();var today=getLocalDateString(now);var startEl=document.getElementById("dailyStartTime");var startManual=startEl&&startEl.dataset.manual==="1";var startM=startManual?parseTimeToMinutes(startEl.value):getLastEndMinutes(date);var endInput=document.getElementById("dailyEndTime");var manual=endInput&&endInput.dataset.manual==="1";var endM=manual?parseTimeToMinutes(endInput.value):parseTimeToMinutes(getLocalTimeString(now));if(date!==today&&!manual&&!startManual){endM=startM}if(endM<startM)endM=startM;if(startEl&&!startManual)startEl.value=formatMinutesToTime(startM);if(endInput&&!manual)endInput.value=formatMinutesToTime(endM);var duration=endM-startM;var durationEl=document.getElementById("dailyDuration");var nextHint=document.getElementById("dailyNextHint");var remainder=(data.mainMinutesTotal||0);var nextRemain=50-(remainder%50);if(nextRemain===50)nextRemain=0;if(durationEl)durationEl.textContent=formatDurationLabel(duration)+(duration>0?" 未记录":"");if(nextHint){var mainRemain=50-((data.mainMinutesTotal||0)%50);if(mainRemain===50)mainRemain=0;var dailyRemain=1200-((data.dailyMinutesTotal||0)%1200);if(dailyRemain===1200)dailyRemain=0;var h="";if(mainRemain===0)h+="<div><strong style='color:#f9d423'>主线已满 50 分钟，可加 1 枚研发点！</strong></div>";else h+="<div><span style='color:#ff9f2f'>再积累 <strong>"+mainRemain+"</strong> 分钟主线时间，可增加一枚研发点</span></div>";if(dailyRemain===0)h+="<div><strong style='color:#f9d423'>日常已满 1200 分钟，可加 1 枚研发点！</strong></div>";else h+="<div><span style='color:#7ec8e3'>再积累 <strong>"+dailyRemain+"</strong> 分钟日常时间，可增加一枚研发点</span></div>";nextHint.innerHTML=h}}

// Daily
function renderDailyList() {
  var c=document.getElementById("dailyList");
  if(!data.dailyLog.length){c.innerHTML='<p style="color:#666;text-align:center;padding:20px">还没有记录，开始添加吧 🚀</p>';return}
  c.innerHTML=[].concat(data.dailyLog).reverse().map(function(d,i){
    var idx=data.dailyLog.length-1-i;
    var range=(d.date||"")+" "+(d.startTime&&d.endTime ? d.startTime+"~"+d.endTime : "");
    var duration=typeof d.clockCount==="number" ? d.clockCount : 0;
    var kind=(d.kind==="main")?"main":"daily";
    var kindLabel=kind==="main"?"主线记录":"日常记录";
    var html='<div class="timeline-row">';
    html+='<div class="timeline-head"><span class="timeline-range">'+escapeHtml(range)+'</span><span class="timeline-kind '+kind+'">'+kindLabel+'</span><span class="timeline-duration">'+formatDurationLabel(duration)+'</span><button class="btn btn-sm btn-outline" onclick="deleteDaily('+idx+')">🗑</button></div>';
    if(d.actions) html+='<div class="timeline-note">'+escapeHtml(d.actions)+'</div>';
    html+='</div>';
    return html;
  }).join("");
}
function addDailyEntry(kind) {
  var date=document.getElementById("dailyDate").value||getLocalDateString();
  var actions=document.getElementById("dailyActions").value.trim();
  if(!actions){showToast("请先写做了什么");return}
  var startInput=document.getElementById("dailyStartTime");
  var endInput=document.getElementById("dailyEndTime");
  var startText=startInput.value.trim();
  var endText=endInput.value.trim();
  var start=parseTimeToMinutes(startText);
  var end=parseTimeToMinutes(endText);
  var duration=end-start;
  if(duration<0) duration=0;
  var oldMainMinutes=data.mainMinutesTotal||0,oldDailyMinutes=data.dailyMinutesTotal||0;
  if(kind==="main"){data.mainMinutesTotal=oldMainMinutes+duration}else{data.dailyMinutesTotal=oldDailyMinutes+duration}
  var deltaPoints;
  if(kind==="main"){deltaPoints=Math.floor(data.mainMinutesTotal/50)-Math.floor(oldMainMinutes/50)}
  else{deltaPoints=Math.floor(data.dailyMinutesTotal/1200)-Math.floor(oldDailyMinutes/1200)}
  if(deltaPoints>0){data.balance=(data.balance||0)+deltaPoints}
  data.dailyLog.push({date:date,kind:kind,startTime:startText,endTime:endText,clockCount:duration,pointsDelta:deltaPoints,actions:actions});
  document.getElementById("dailyActions").value="";
  if(endInput){endInput.dataset.manual="0"}
  saveData();renderDailyList();updateStats();updateDailyDraftTimes();
  showToast((kind==="main"?"主线":"日常")+"记录成功"+(deltaPoints>0?"，+"+deltaPoints+" 研发点":""))
}
function mergeToLastEntry(){
  if(!data.dailyLog.length){showToast("没有可合并的记录");return}
  var startInput=document.getElementById("dailyStartTime");
  var endInput=document.getElementById("dailyEndTime");
  var startText=startInput.value.trim();
  var endText=endInput.value.trim();
  var duration=parseTimeToMinutes(endText)-parseTimeToMinutes(startText);
  if(duration<=0){showToast("当前没有未记录的时间");return}
  var last=data.dailyLog[data.dailyLog.length-1];
  if(last.date!==(document.getElementById("dailyDate").value||getLocalDateString())){showToast("上一次记录不在同一天，无法合并");return}
  var oldEnd=parseTimeToMinutes(last.endTime);
  var newEnd=oldEnd+duration;
  last.endTime=formatMinutesToTime(newEnd);
  last.clockCount=(last.clockCount||0)+duration;
  var dp=0;
  if(last.kind==="main"){
    var oldMM=data.mainMinutesTotal||0;
    data.mainMinutesTotal=oldMM+duration;
    dp=Math.floor(data.mainMinutesTotal/50)-Math.floor(oldMM/50)
  }else{
    var oldDM=data.dailyMinutesTotal||0;
    data.dailyMinutesTotal=oldDM+duration;
    dp=Math.floor(data.dailyMinutesTotal/1200)-Math.floor(oldDM/1200)
  }
  if(dp>0){data.balance=(data.balance||0)+dp;last.pointsDelta=(last.pointsDelta||0)+dp}
  endInput.value=formatMinutesToTime(parseTimeToMinutes(startText));
  endInput.dataset.manual="0";
  saveData();renderDailyList();updateStats();updateDailyDraftTimes();
  showToast("已合并 "+formatDurationLabel(duration)+" 到上一次"+(last.kind==="main"?"主线":"日常")+"记录"+(dp>0?"，+"+dp+" 研发点":""));
}

function deleteDaily(i){if(confirm("确定删除？")){var item=data.dailyLog[i];if(item){var oldMM=data.mainMinutesTotal||0,oldDM=data.dailyMinutesTotal||0;data.dailyLog.splice(i,1);if(item.kind==="main"){recalcMainMinutesTotal();var dp=Math.floor((data.mainMinutesTotal||0)/50)-Math.floor(oldMM/50);if(dp!==0)data.balance=(data.balance||0)+dp}else{recalcDailyMinutesTotal();var dp=Math.floor((data.dailyMinutesTotal||0)/1200)-Math.floor(oldDM/1200);if(dp!==0)data.balance=(data.balance||0)+dp}}else{data.dailyLog.splice(i,1)}saveData();renderDailyList();updateStats();updateDailyDraftTimes();showToast("已删除")}}

// Quests
function renderQuests() {
  var container=document.getElementById("questList");
  function renderQuestItem(q){
    return'<div class="quest-item '+(q.done?'done':'')+'">'+
      '<div class="quest-row-top">'+
        '<div class="quest-check '+(q.done?'checked':'')+'" onclick="toggleQuest(\''+q.id+'\')">'+(q.done?'&#x2713;':'')+'</div>'+
        '<span class="name">'+q.title+'</span>'+
        '<span class="pts">+'+q.points+'点</span>'+
      '</div>'+
      '<div class="quest-row-bot">'+
        '<button class="btn btn-xs btn-outline" onclick="moveQuest(\''+q.id+'\',\'up\')">&#x25B2;</button>'+
        '<button class="btn btn-xs btn-outline" onclick="moveQuest(\''+q.id+'\',\'down\')">&#x25BC;</button>'+
        '<button class="btn btn-xs btn-outline" onclick="editQuest(\''+q.id+'\')">&#x270F; 编辑</button>'+
        '<button class="btn btn-xs btn-outline" onclick="removeQuest(\''+q.id+'\')">&#x1F5D1; 删除</button>'+
      '</div></div>';
  }
  var ac={},arc={};
  data.mainQuests.forEach(function(q){var t=q.done?arc:ac;if(!t[q.category])t[q.category]=[];t[q.category].push(q)});
  var ah=Object.entries(ac).map(function(e){return'<div class="quest-category"><h4>📌 '+e[0]+' ('+e[1].length+') <button class="btn btn-sm btn-outline" style="padding:1px 5px;font-size:0.65em" onclick="editCategory(\''+e[0]+'\')">✏</button> <button class="btn btn-sm btn-outline" style="padding:1px 5px;font-size:0.65em;color:#ff4e50" onclick="deleteCategory(\''+e[0]+'\')">🗑</button></h4>'+e[1].map(renderQuestItem).join("")+'</div>'}).join("");
  var arh="";
  if(Object.keys(arc).length>0){
    arh='<div style="margin-top:20px;padding-top:16px;border-top:1px dashed #444"><h3 style="color:#888;margin-bottom:10px">📦 归档（已完成）</h3>';
    arh+=Object.entries(arc).map(function(e){return'<div class="quest-category" style="opacity:0.6"><h4 style="color:#666">📌 '+e[0]+' <button class="btn btn-sm btn-outline" style="padding:1px 5px;font-size:0.65em" onclick="editCategory(\''+e[0]+'\')">✏</button> <button class="btn btn-sm btn-outline" style="padding:1px 5px;font-size:0.65em;color:#ff4e50" onclick="deleteCategory(\''+e[0]+'\')">🗑</button></h4>'+e[1].map(function(q){return'<div class="quest-item done"><div class="quest-row-top"><span class="name">'+q.title+'</span><span class="pts">+'+q.points+'点</span></div><div class="quest-row-bot"><button class="btn btn-xs btn-outline" onclick="toggleQuest(\''+q.id+'\')">↩ 撤回</button><button class="btn btn-xs btn-outline" onclick="removeQuest(\''+q.id+'\')">🗑</button></div>'}).join("")+'</div>'}).join("");
    arh+='</div>';
  }
  container.innerHTML=(ah||'<p style="color:#666;text-align:center;padding:20px">还没有主线内容，在上方添加吧 🚀</p>')+arh;
}
function toggleQuest(id){
  var q=data.mainQuests.find(function(x){return x.id===id});
  if(q){q.done=!q.done;data.balance=(data.balance||0)+(q.done?q.points:-q.points);saveData();renderQuests();updateStats();renderLevelGrid();showToast(q.done?'✅ +'+q.points+' 研发点':'已取消完成')}
}
function resetQuestForm(){document.getElementById("questCategoryInput").value="";document.getElementById("questTitleInput").value="";document.getElementById("questPointsInput").value=0;document.getElementById("editingQuestId").value=""}
function saveQuestFromForm(){
  var cat=document.getElementById("questCategoryInput").value.trim();
  var title=document.getElementById("questTitleInput").value.trim();
  var pts=parseInt(document.getElementById("questPointsInput").value)||0;
  var eid=document.getElementById("editingQuestId").value;
  if(!cat||!title){showToast("请先填写分类和内容");return}
  if(eid){var q=data.mainQuests.find(function(x){return x.id===eid});if(q){q.category=cat;q.title=title;q.points=pts;showToast("主线已更新")}}
  else{data.mainQuests.unshift({id:"q"+Date.now(),category:cat,title:title,points:pts,done:false});showToast("主线已添加")}
  saveData();renderQuests();resetQuestForm();
}
function editQuest(id){
  var q=data.mainQuests.find(function(x){return x.id===id});if(!q)return;
  document.getElementById("questCategoryInput").value=q.category;document.getElementById("questTitleInput").value=q.title;
  document.getElementById("questPointsInput").value=q.points;document.getElementById("editingQuestId").value=q.id;showToast("已载入编辑")
}
function removeQuest(id){if(!confirm("确定删除？"))return;data.mainQuests=data.mainQuests.filter(function(x){return x.id!==id});saveData();renderQuests();resetQuestForm();showToast("主线已删除")}
function editCategory(oldName){
  var nn=prompt("编辑分类名称：",oldName);if(nn!==null&&nn.trim()!==""&&nn.trim()!==oldName){
    data.mainQuests.forEach(function(q){if(q.category===oldName)q.category=nn.trim()});saveData();renderQuests();showToast("分类已更新")
  }
}
function deleteCategory(cn){if(!confirm('确定删除整个"'+cn+'"分类及其所有任务？此操作不可恢复。'))return;data.mainQuests=data.mainQuests.filter(function(q){return q.category!==cn});saveData();renderQuests();updateStats();renderLevelGrid();showToast("已删除分类："+cn)}
function moveQuest(id,dir){
  var idx=data.mainQuests.findIndex(function(q){return q.id===id});if(idx<0)return;
  var q=data.mainQuests[idx],si;
  if(dir==='up'){for(var i=idx-1;i>=0;i--){if(data.mainQuests[i].category===q.category&&data.mainQuests[i].done===q.done){si=i;break}}}
  else{for(var i=idx+1;i<data.mainQuests.length;i++){if(data.mainQuests[i].category===q.category&&data.mainQuests[i].done===q.done){si=i;break}}}
  if(si!==undefined){var t=data.mainQuests[idx];data.mainQuests[idx]=data.mainQuests[si];data.mainQuests[si]=t;saveData();renderQuests()}
}

// Levels
function renderLevelGrid(){
  var t=calcTotalPoints(),cl=calcLevel(t)+1,c=document.getElementById("levelGrid");
  c.innerHTML=data.levelRewards.map(function(r){
    var reached=r.lv<=cl,cb='';
    if(reached){cb=r.claimed?'<button class="btn btn-sm lv-btn" style="background:#4fc3f7;color:#0f0f1a" onclick="claimReward('+r.lv+')">✅ 已领取</button>':'<button class="btn btn-sm lv-btn" onclick="claimReward('+r.lv+')">🎁 领取</button>'}
    return'<div class="level-item '+(reached?'reached':'')+'"><div class="lv-name">Lv.'+r.lv+' '+(r.lv===cl?'👈 当前':'')+' <button class="btn btn-sm btn-outline" style="padding:1px 4px;font-size:0.6em;color:#ff4e50" onclick="deleteLevelReward('+r.lv+')">🗑</button></div><div style="font-size:0.7em;color:#888">需累计 '+r.need+' 点</div><div class="lv-reward">'+r.reward+' <button class="btn btn-sm btn-outline" style="padding:2px 6px;font-size:0.7em" onclick="editReward('+r.lv+')">✏</button></div>'+cb+'</div>';
  }).join("")+'<button class="btn btn-sm btn-outline" style="margin-top:8px;width:100%" onclick="addLevelReward()">+ 新增等级奖励</button>';
  var nl=cl,pt=calcLevelPoints(nl-1),nt=calcLevelPoints(nl),pg=Math.min(100,Math.max(0,((t-pt)/(nt-pt))*100));
  document.getElementById("levelBar").style.width=pg+"%";
  document.getElementById("lvProgressLabel").textContent="Lv."+nl+" → Lv."+(nl+1);
  document.getElementById("lvProgressPts").textContent=(t-pt)+" / "+(nt-pt);
  updateStats();
}
function claimReward(lv){
  var r=data.levelRewards.find(function(x){return x.lv===lv});
  if(r){r.claimed=!r.claimed;saveData();renderLevelGrid();showToast(r.claimed?"🎉 已领取 Lv."+lv+" 奖励":"↩ 已撤销 Lv."+lv+" 领取")}
}
function editReward(lv){
  var r=data.levelRewards.find(function(x){return x.lv===lv});if(!r)return;
  var nt=prompt("编辑 Lv."+lv+" 奖励内容：",r.reward);if(nt!==null&&nt.trim()!==""){r.reward=nt.trim();saveData();renderLevelGrid();showToast("奖励已更新")}
}
function addLevelReward(){
  var nl=data.levelRewards.length+1,ln=data.levelRewards.length>0?data.levelRewards[data.levelRewards.length-1].need:0;
  data.levelRewards.push({lv:nl,need:ln+25+(nl-1)*5,reward:"还没想好",claimed:false});saveData();renderLevelGrid();showToast("+ 已添加 Lv."+nl)
}
function deleteLevelReward(lv){if(!confirm("确定删除 Lv."+lv+" 奖励？"))return;data.levelRewards=data.levelRewards.filter(function(r){return r.lv!==lv});saveData();renderLevelGrid();showToast("已删除 Lv."+lv)}

// Roulette
var currentRouletteType="运动转盘",isSpinning=false;
function renderRouletteTabs(){
  document.getElementById("rouletteTabs").innerHTML=Object.keys(data.roulettes).map(function(t){
    return'<button class="r-tab '+(t===currentRouletteType?'active':'')+'" onclick="selectRoulette(\''+t+'\')">'+t+'</button>'
  }).join("");updateSpinRemaining();
}
function spinRandomCategoryAndSpin(){if(isSpinning)return;var types=Object.keys(data.roulettes);selectRoulette(types[Math.floor(Math.random()*types.length)]);showToast("随机到："+currentRouletteType)}
function selectRoulette(type){currentRouletteType=type;document.getElementById("spinCost").textContent=data.roulettes[type].cost;document.getElementById("spinResult").textContent="🎯 点击下方按钮开始抽奖";renderRouletteTabs();renderRouletteItems();document.querySelectorAll(".roulette-item").forEach(function(el){el.classList.remove("highlight")});updateSpinRemaining()}
function renderRouletteItems(){
  var items=data.roulettes[currentRouletteType].items,html='';
  for(var i=0;i<items.length;i++){html+='<div class="roulette-item" id="ritem-'+i+'"><span style="flex:1">'+(i+1)+'. '+items[i]+'</span><button class="btn btn-sm btn-outline" style="padding:1px 5px;font-size:0.65em" onclick="editRouletteItem('+i+')">✏</button><button class="btn btn-sm btn-outline" style="padding:1px 5px;font-size:0.65em;color:#ff4e50" onclick="deleteRouletteItem('+i+')">🗑</button></div>'}
  html+='<div style="display:flex;gap:6px;margin-top:8px"><input type="text" id="newRouletteItem" placeholder="新增条目..." style="flex:1;font-size:0.8em"><button class="btn btn-sm" onclick="addRouletteItem()">+</button></div>';
  document.getElementById("rouletteItems").innerHTML=html;document.getElementById("spinCost").textContent=data.roulettes[currentRouletteType].cost;updateSpinRemaining();
}
function editRouletteItem(idx){var items=data.roulettes[currentRouletteType].items;var nt=prompt("编辑条目：",items[idx]);if(nt!==null&&nt.trim()!==""){items[idx]=nt.trim();saveData();renderRouletteItems();showToast("已更新")}}
function deleteRouletteItem(idx){var items=data.roulettes[currentRouletteType].items;if(!confirm('确定删除"'+items[idx]+'"？'))return;items.splice(idx,1);saveData();renderRouletteItems();showToast("已删除")}
function addRouletteItem(){var inp=document.getElementById("newRouletteItem");var t=(inp.value||"").trim();if(!t){showToast("请先输入内容");return}data.roulettes[currentRouletteType].items.push(t);saveData();renderRouletteItems();showToast("+ 已添加")}
function spinRoulette(){
  if(isSpinning)return;var cost=data.roulettes[currentRouletteType].cost,items=data.roulettes[currentRouletteType].items;
  var bal=data.balance||0;if(bal<cost){showToast("❌ 研发点余额不足！");return}
  isSpinning=true;document.getElementById("spinBtn").disabled=true;document.getElementById("spinResult").textContent="🎰 转盘转动中...";
  var count=0,mc=20,iv=setInterval(function(){
    var idx=Math.floor(Math.random()*items.length);
    document.querySelectorAll(".roulette-item").forEach(function(el){el.classList.remove("highlight")});
    var el=document.getElementById("ritem-"+idx);if(el)el.classList.add("highlight");
    count++;if(count>=mc){clearInterval(iv);
      var fi=Math.floor(Math.random()*items.length);
      document.querySelectorAll(".roulette-item").forEach(function(el){el.classList.remove("highlight")});
      var fe=document.getElementById("ritem-"+fi);if(fe)fe.classList.add("highlight");
      var result=items[fi];
      data.balance=(data.balance||0)-cost;data.spinHistory.push({type:currentRouletteType,result:result,date:new Date().toISOString().split("T")[0],cost:cost});
      saveData();showSpinResultModal(currentRouletteType,result,cost);
      document.getElementById("spinBtn").disabled=false;isSpinning=false;updateStats();updateSpinRemaining();
    }
  },100);
}
function updateSpinRemaining(){var cost=data.roulettes[currentRouletteType].cost,bal=data.balance||0,el=document.getElementById("spinRemaining");if(el)el.textContent="余额可抽 "+Math.max(0,Math.floor(bal/cost))+" 次"}
function restoreFivePoints(){data.balance=(data.balance||0)+5;saveData();updateStats();updateSpinRemaining();showToast("💧 已恢复5点研发点")}
function editBalance(){var v=prompt("修改研发点余额：",data.balance||0);if(v!==null){var n=parseInt(v);if(!isNaN(n)){data.balance=n;saveData();updateStats();updateSpinRemaining();showToast("余额已更新为 "+n)}}}

// Tabs
function switchTab(tab){
  document.querySelectorAll(".tab").forEach(function(t){t.classList.remove("active")});
  document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active")});
  var map={daily:1,main:2,rewards:3,roulette:4};
  document.querySelector(".tab:nth-child("+map[tab]+")").classList.add("active");
  document.getElementById("page-"+tab).classList.add("active");
  if(tab==="rewards")renderLevelGrid();
  if(tab==="roulette"){renderRouletteTabs();renderRouletteItems();updateSpinRemaining()}
  if(tab==="main")renderQuests();if(tab==="daily"){renderDailyList();updateDailyDraftTimes();var today=getLocalDateString();var df=document.getElementById("exportDateFrom");var dt=document.getElementById("exportDateTo");if(df)df.value=today;if(dt)dt.value=today}
}

// Toast
function showToast(msg){var c=document.getElementById("toastContainer"),t=document.createElement("div");t.className="toast";t.textContent=msg;c.appendChild(t);setTimeout(function(){t.remove()},2000)}

// Init
function exportTimelineToday(){
  var today=getLocalDateString();
  document.getElementById("exportDateFrom").value=today;
  document.getElementById("exportDateTo").value=today;
  doExportTimeline(today,today);
}
function exportTimelineAll(){
  if(!data.dailyLog.length){showToast("没有可导出的记录");return}
  var dates=data.dailyLog.map(function(d){return d.date}).sort();
  doExportTimeline(dates[0],dates[dates.length-1]);
}
function exportTimelineRange(){
  var from=document.getElementById("exportDateFrom").value;
  var to=document.getElementById("exportDateTo").value;
  if(!from||!to){showToast("请选择日期范围");return}
  if(from>to){showToast("开始日期不能晚于结束日期");return}
  doExportTimeline(from,to);
}
function doExportTimeline(from,to){
  var entries=data.dailyLog.filter(function(d){return d.date>=from&&d.date<=to}).sort(function(a,b){return a.date>b.date?1:a.date<b.date?-1:0});
  if(!entries.length){showToast("该时间段内没有记录");return}
  var text="时间线导出报告\n";
  text+="导出范围："+from+" 至 "+to+"\n";
  text+="导出时间："+new Date().toLocaleString()+"\n";
  text+="=".repeat(50)+"\n\n";
  var currentDate="";
  entries.forEach(function(e){
    if(e.date!==currentDate){
      currentDate=e.date;
      text+="\n📅 "+currentDate+"\n"+("-".repeat(30))+"\n";
    }
    var kind=e.kind==="main"?"【主线记录】":"【日常记录】";
    var range=e.startTime&&e.endTime?e.startTime+"~"+e.endTime:"";
    var dur=formatDurationLabel(e.clockCount||0);
    text+=kind+" "+range+" ("+dur+")"+"\n";
    if(e.actions)text+="  "+e.actions.replace(/\n/g,"\n  ")+"\n";
    text+="\n";
  });
  var blob=new Blob([text],{type:"text/plain;charset=utf-8"});
  var a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="timeline_"+from+"_"+to+".txt";
  a.click();URL.revokeObjectURL(a.href);
  showToast("📤 已导出 "+entries.length+" 条记录");
}

function exportData(){var blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="growth_system_backup_"+new Date().toISOString().split("T")[0]+".json";a.click();URL.revokeObjectURL(a.href);showToast("📥 数据已导出！")}
function importData(e){var file=e.target.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(ev){try{var j=JSON.parse(ev.target.result);data=Object.assign(JSON.parse(JSON.stringify(DEFAULT_DATA)),j);saveData();init();showToast("📤 数据已恢复！")}catch(err){showToast("❌ 文件格式错误")}};reader.readAsText(file);e.target.value=""}
function showSpinResultModal(type,result,cost){
  var overlay=document.createElement("div");overlay.className="spin-overlay";overlay.id="spinOverlay";
  var typeIcons={"运动转盘":"🏃","美食转盘":"🍜","好奇心转盘":"🔍","游戏转盘":"🎮"};
  var icon=typeIcons[type]||"🎰";
  overlay.innerHTML='<div class="spin-modal"><span class="spin-icon">'+icon+'</span><h2>恭喜获得！</h2><div class="spin-category">'+type+'</div><div class="spin-prize"><div class="spin-prize-text">'+result+'</div></div><div class="spin-cost-info">消耗 '+cost+' 研发点 · 余额剩余 '+Math.max(0,data.balance||0)+' 点</div><div class="spin-btns"><button class="btn" style="font-size:1em;padding:10px 24px" onclick="closeSpinModal();spinRoulette()">🔄 再来一次</button><button class="btn btn-outline" style="font-size:0.9em" onclick="closeSpinModal()">✕ 关闭</button></div></div>';
  document.body.appendChild(overlay);
}
function closeSpinModal(){var el=document.getElementById("spinOverlay");if(el)el.remove()}

function showLevelUpModal(lv){
  var reward=data.levelRewards.find(function(r){return r.lv===lv});
  var rewardText=reward?reward.reward:"暂无奖励";
  var overlay=document.createElement("div");overlay.className="levelup-overlay";overlay.id="levelupOverlay";
  overlay.innerHTML='<div class="levelup-modal"><span class="lv-emoji">🎉</span><h2>恭喜升级！</h2><p style="color:#ccc;font-size:1.1em">你已达到 <strong style="color:#f9d423">Lv.'+lv+'</strong></p><p class="lv-reward-text">升级奖励</p><p class="lv-reward-name">'+rewardText+'</p><div class="lv-btn-block"><button class="btn" style="font-size:1.1em;padding:12px 32px" onclick="claimRewardFromModal('+lv+')">🎁 领取奖励</button></div><button style="background:none;border:none;color:#888;margin-top:16px;cursor:pointer;font-size:0.85em" onclick="closeLevelUpModal()">稍后再说</button></div>';
  document.body.appendChild(overlay);
  overlay.addEventListener("click",function(e){if(e.target===overlay)closeLevelUpModal()});
}
function closeLevelUpModal(){var el=document.getElementById("levelupOverlay");if(el)el.remove()}
function claimRewardFromModal(lv){var r=data.levelRewards.find(function(x){return x.lv===lv});if(r&&!r.claimed){r.claimed=true;saveData();renderLevelGrid();showToast("🎉 已领取 Lv."+lv+" 奖励！")}closeLevelUpModal()}

function renderDailyTodos(){var todos=data.dailyTodos||[];var html='';todos.forEach(function(todo,idx){html+='<div class="todo-item'+(todo.done?' todo-done':'')+'"><div class="todo-check'+(todo.done?' todo-checked':'')+'" onclick="toggleDailyTodo('+idx+')">'+(todo.done?'&#x2713;':'')+'</div><span class="todo-text">'+escapeHtml(todo.text)+'</span><button class="btn btn-sm btn-outline" style="padding:2px 6px;font-size:0.7em" onclick="deleteDailyTodo('+idx+')">&#xd7;</button></div>'});document.getElementById('dailyTodoList').innerHTML=html||'<div style="color:#666;font-size:0.8em">还没有待办，添加一条吧</div>'}
function addDailyTodo(){var inp=document.getElementById('newTodoInput');var text=(inp.value||'').trim();if(!text){showToast('请先输入内容');return}if(!data.dailyTodos)data.dailyTodos=[];data.dailyTodos.push({text:text,done:false});saveData();inp.value='';renderDailyTodos();showToast('+ 已添加')}
function toggleDailyTodo(idx){if(!data.dailyTodos||!data.dailyTodos[idx])return;data.dailyTodos[idx].done=!data.dailyTodos[idx].done;saveData();renderDailyTodos()}
function deleteDailyTodo(idx){if(!data.dailyTodos||!data.dailyTodos[idx])return;data.dailyTodos.splice(idx,1);saveData();renderDailyTodos();showToast('已删除')}


function init(){loadData();renderDailyTodos();document.getElementById("dailyDate").value=getLocalDateString();var endInput=document.getElementById("dailyEndTime");if(endInput){endInput.addEventListener("input",function(){this.dataset.manual="1";updateDailyDraftTimes()})}var startInput=document.getElementById("dailyStartTime");if(startInput){startInput.addEventListener("input",function(){this.dataset.manual="1";updateDailyDraftTimes()})}renderDailyList();renderLevelGrid();updateStats();resetQuestForm();renderQuests();renderRouletteTabs();renderRouletteItems();updateDailyDraftTimes()}
init();setInterval(updateDailyDraftTimes,1000);
