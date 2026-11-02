const projectDetails={
  copilot:{category:'AI AGENT',title:'CoPilot · 让灵感走向行动',intro:'一个围绕“从想法到方案”设计的 AI 工作伙伴概念。重点不在于多回答几个问题，而在于帮助人把模糊的想法变成可推进的下一步。',question:'当一个想法还不够清楚时，怎样帮助用户开始，而不替用户过早做决定？',ideas:['先澄清目标、使用场景与约束，再生成方案。','把大任务拆成可编辑的小步骤，让用户随时调整方向。','对外发送、发布等动作之前，展示具体内容并让用户确认。'],validation:'观察用户能否理解、修改并继续推进计划；记录反复澄清的位置，而不只看生成速度。'},
  knowledge:{category:'KNOWLEDGE × AI',title:'知屿 · 让知识彼此相连',intro:'一个关于个人知识流动的概念。收藏只是开始，更值得探索的是：在需要的时候，能不能找到相关内容，并理解它们之间的联系。',question:'如何让分散的笔记与收藏，在一个具体问题面前重新变得有用？',ideas:['围绕当前问题组织相关内容，而不是只依赖文件夹。','回答时保留原始出处，方便回到上下文检查。','允许用户纠正连接、补充理解，让知识结构持续生长。'],validation:'用真实的查找与写作任务，观察用户是否能找到出处、判断相关性，并形成自己的结论。'},
  daily:{category:'PRODUCT EXPERIENCE',title:'日常之间 · 自然发生的 AI 体验',intro:'一个关于轻量日常助手的体验概念。让 AI 在整理想法、安排任务等小场景里提供帮助，同时把注意力留给生活本身。',question:'当用户只是想完成一件小事，怎样避免把简单任务变成复杂的对话？',ideas:['优先展示当前任务需要的操作，减少从空白聊天框开始的负担。','建议可以一键接受、编辑或忽略，始终保留控制权。','把主动提醒建立在明确偏好之上，允许随时关闭。'],validation:'比较完成同一件事需要的步骤、用户理解建议的难度，以及被打扰的感受。'}
};
const notes={
  need:{category:'产品判断',title:'先问“为什么需要 AI”，再问“怎么做 AI”',paragraphs:['我想从一个具体任务开始：谁在什么场景下，遇到了什么麻烦？现有方法为什么还不够好？只有这些问题比较清楚时，“加入 AI”才有了可以判断的意义。','一种可行的思考方式是，先写下不用 AI 的解决方案，再比较引入 AI 后真正改变了什么。它可能减少操作，也可能让原本难以完成的任务变得可行；与此同时，它也可能带来等待、校验和纠错的负担。','我更愿意把评估问题写成：“用户是否更容易完成原来的任务？”而不是“这个功能用了多少 AI”。选择技术之前，先定义值得改善的体验。']},
  agent:{category:'人机协作',title:'一个好的 Agent，应该知道什么时候停下来',paragraphs:['我理解的自主性，是在用户认可的目标和边界内推进任务。它需要判断下一步能否直接执行，也需要识别哪些决定应该交还给人。','在可回退的小步骤上，反复确认会打断工作；在对外发送、付费或删除之前，缺少确认又可能让用户失去控制。两者之间的边界，应该通过具体的任务和影响来设计。','我希望一个 Agent 能清楚说明：做完了什么，依据是什么，还有什么不确定。必要时停下来并给出可审阅的结果，也是一种推进任务的能力。']},
  experience:{category:'体验设计',title:'最好的 AI 体验，也许不需要一个聊天框',paragraphs:['聊天是表达复杂意图的一种方式，但不是所有任务都需要从输入一句话开始。对于明确、重复、上下文充足的操作，一个按钮、一条建议或一个可编辑的结果，可能更直接。','我会先观察用户原本正在做什么：是在阅读、整理、比较，还是作出选择？交互方式应该接在这个动作后面，而不是让人离开当前任务，重新描述所有背景。','这不是排除对话，而是把对话放在需要它的地方。好的体验应该让用户知道能做什么、结果从哪里来，以及如何修改，而不必时时意识到背后是 AI。']}
};
const dialog=document.querySelector('#detail-dialog');
const content=document.querySelector('#dialog-content');
let lastTrigger=null;
function openDetail(html,trigger){lastTrigger=trigger;content.innerHTML=html;dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden'}
function closeDetail(){dialog.close()}
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus()});
document.querySelector('.dialog-close').addEventListener('click',closeDetail);
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDetail()});
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projectDetails[button.dataset.project];openDetail(`<p class="dialog-eyebrow">${p.category}</p><span class="dialog-badge">概念探索 · 非已上线项目</span><h2>${p.title}</h2><p>${p.intro}</p><h3>想解决的问题</h3><p>${p.question}</p><h3>值得尝试的方向</h3><ul>${p.ideas.map(i=>`<li>${i}</li>`).join('')}</ul><h3>如何验证</h3><p>${p.validation}</p><p class="dialog-footnote">这是个人网站首版的示例概念，可替换为 CoCo 的真实项目与实践记录。</p>`,button)}));
document.querySelectorAll('[data-note]').forEach(button=>button.addEventListener('click',()=>{const n=notes[button.dataset.note];openDetail(`<p class="dialog-eyebrow">${n.category} · 观点草稿</p><h2>${n.title}</h2>${n.paragraphs.map(p=>`<p>${p}</p>`).join('')}<p class="dialog-footnote">为网站首版拟写的产品思考草稿，待 CoCo 确认与补充。</p>`,button)}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('[data-project]').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter})}));
document.querySelector('.copy-intro').addEventListener('click',async e=>{const intro='你好，我是 CoCo 小克克，一名 AI 产品经理。在技术的可能与人的需要之间，寻找值得做的产品。';try{await navigator.clipboard.writeText(intro);const toast=document.querySelector('.toast');toast.textContent='个人介绍已复制';toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),2600)}catch{openDetail(`<p class="dialog-eyebrow">ABOUT COCO</p><h2>我的个人介绍</h2><p>${intro}</p><p class="dialog-footnote">可以选中文字，手动复制。</p>`,e.currentTarget)}});
