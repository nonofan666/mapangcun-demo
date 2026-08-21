const pageMeta={dashboard:['经营概览','掌握平台交易、履约和商家经营情况'],custom:['定制需求','承接用户从专题页提交的个性化出行需求'],orders:['订单与核销','统一处理支付订单、履约核销与售后'],revenue:['收益明细','查看平台收益、商家应收与结算进度'],merchants:['商家管理','管理多商家入驻、经营与账号状态'],qualification:['资质审核','审核商家主体证照和行业经营许可'],products:['商品管理','管理全平台商品、价格、库存和上架审核']};
const demands=[
 {id:'DZ260820006',name:'周女士',phone:'138****2806',trip:'8月29日 · 4人 · 3天2晚',choice:'侗寨民宿 / 茶园采茶 / 长桌宴',budget:'¥6,000—8,000',owner:'阿妮',status:'待跟进',cls:'wait'},
 {id:'DZ260820005',name:'陈先生',phone:'186****1028',trip:'9月03日 · 5人 · 5天4晚',choice:'精品民宿 / 深度境教 / 接送站',budget:'¥10,000—12,000',owner:'吴顾问',status:'方案中',cls:'info'},
 {id:'DZ260819018',name:'林女士',phone:'159****6612',trip:'8月25日 · 2人 · 2天1晚',choice:'山景房 / 手作体验 / 不含接送',budget:'¥3,000—4,000',owner:'阿妮',status:'待确认',cls:'ok'},
 {id:'DZ260819012',name:'王先生',phone:'177****4509',trip:'10月01日 · 8人 · 5天4晚',choice:'家庭房 / 7项体验 / 全程用车',budget:'¥18,000—22,000',owner:'未分派',status:'待跟进',cls:'wait'},
 {id:'DZ260818009',name:'赵女士',phone:'135****9210',trip:'8月24日 · 3人 · 3天2晚',choice:'茶园民宿 / 制茶 / 长桌宴',budget:'¥5,000—7,000',owner:'吴顾问',status:'已转订单',cls:'ok'}
];
const merchants=[
 {logo:'宿',name:'马胖村云上民宿',cat:'住宿 · 餐饮',goods:8,sales:'¥32,680',score:'4.92',status:'营业中',cls:'ok'},
 {logo:'茶',name:'茶禾境教基地',cat:'农事 · 研学体验',goods:12,sales:'¥26,420',score:'4.88',status:'营业中',cls:'ok'},
 {logo:'行',name:'黔东南安心车队',cat:'交通接驳',goods:5,sales:'¥18,900',score:'4.81',status:'营业中',cls:'ok'},
 {logo:'宴',name:'阿婆长桌宴',cat:'餐饮 · 民俗体验',goods:6,sales:'¥15,760',score:'4.96',status:'营业中',cls:'ok'},
 {logo:'作',name:'侗艺手作坊',cat:'非遗手作',goods:9,sales:'¥9,820',score:'4.77',status:'待完善',cls:'wait'},
 {logo:'农',name:'马胖村农品合作社',cat:'农产品',goods:7,sales:'¥8,460',score:'4.85',status:'营业中',cls:'ok'}
];
const orderSeed=[
 {id:'MP2608201038',time:'今天 13:42',user:'周女士',phone:'138****2806',item:'3天2晚特色定制出行',merchant:'3家商家联合履约',amount:6609,status:'待确认',cls:'wait'},
 {id:'MP2608201029',time:'今天 11:18',user:'李先生',phone:'186****3471',item:'制茶体验 ×2、长桌宴 ×2',merchant:'茶禾基地 / 阿婆长桌宴',amount:536,status:'待核销',cls:'info'},
 {id:'MP2608201016',time:'今天 09:25',user:'张女士',phone:'159****0866',item:'云上民宿山景房 ×1',merchant:'马胖村云上民宿',amount:368,status:'已核销',cls:'ok'},
 {id:'MP2608190988',time:'昨天 18:05',user:'王先生',phone:'177****4509',item:'农产品组合礼盒 ×2',merchant:'马胖村农品合作社',amount:296,status:'已发货',cls:'ok'}
];
const settlements=[
 ['JS260820018','茶禾境教基地','12笔','¥3,860','-¥463','¥3,397','待结算','wait'],['JS260820017','马胖村云上民宿','8笔','¥6,920','-¥830','¥6,090','待结算','wait'],['JS260819016','阿婆长桌宴','15笔','¥4,280','-¥514','¥3,766','已结算','ok'],['JS260819015','黔东南安心车队','6笔','¥5,400','-¥648','¥4,752','已结算','ok']
];
const quals=[
 {name:'侗艺手作坊',owner:'杨美花 · 个体工商户',cat:'非遗手作',docs:'营业执照、法人身份证',time:'今天 10:26',status:'待审核',cls:'wait'},
 {name:'山路旅拍工作室',owner:'刘青 · 个体工商户',cat:'旅拍服务',docs:'营业执照、摄影服务承诺书',time:'昨天 17:42',status:'待审核',cls:'wait'},
 {name:'黔东南安心车队',owner:'黔东南安心运输有限公司',cat:'交通接驳',docs:'营业执照、道路运输许可证等 4 项',time:'08-18 14:10',status:'审核中',cls:'info'},
 {name:'马胖村云上民宿',owner:'榕江县云上民宿有限公司',cat:'住宿 · 餐饮',docs:'营业执照、特种行业许可证等 5 项',time:'08-12 09:32',status:'已通过',cls:'ok'}
];
const products=[
 ['茶园采茶与手工制茶','TY-CT-001','茶禾境教基地','农事体验','¥128/人','24 / 16','在售','ok'],['云上民宿山景大床房','MS-SJ-003','马胖村云上民宿','住宿','¥368/间夜','6 / 3','在售','ok'],['侗寨百家长桌宴','CY-CZ-002','阿婆长桌宴','餐饮体验','¥140/人','40 / 22','在售','ok'],['高铁站往返接送','JT-JS-001','黔东南安心车队','交通','¥380/车','8 / 4','在售','ok'],['侗布扎染体验','FY-ZR-006','侗艺手作坊','非遗手作','¥98/人','18 / 0','待审核','wait'],['马胖村山野礼盒','NP-LH-008','马胖村农品合作社','农产品','¥148/盒','65 / 31','在售','ok']
];

function money(n){return '¥'+Number(n||0).toLocaleString('zh-CN')}
function setPage(name,push=true){if(!pageMeta[name])name='dashboard';document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id==='page-'+name));document.querySelectorAll('nav a').forEach(x=>x.classList.toggle('active',x.dataset.page===name));pageTitle.textContent=pageMeta[name][0];pageDesc.textContent=pageMeta[name][1];if(push)history.replaceState(null,'','#'+name);window.scrollTo(0,0)}
document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{e.preventDefault();setPage(a.dataset.page)});document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>setPage(b.dataset.go));

function render(){
 const inventory=typeof getInventory==='function'?getInventory():[],localOrders=JSON.parse(localStorage.getItem(typeof ORDER_KEY==='undefined'?'mp_orders_v1':ORDER_KEY)||'[]'),todaySales=localOrders.reduce((n,x)=>n+Number(x.amount||0),0)+12860;
 metrics.innerHTML=`<article><span>今日交易额</span><strong>${money(todaySales)}</strong><small>较昨日 +18.6%</small></article><article><span>今日订单</span><strong>${26+localOrders.length}</strong><small>定制 3 · 单项体验 23</small></article><article><span>待跟进需求</span><strong>6</strong><small>最早等待 42 分钟</small></article><article><span>入驻商家</span><strong>12</strong><small>在售商品 ${Math.max(47,inventory.length)}</small></article>`;
 dashboardDemands.innerHTML=demands.slice(0,3).map(d=>`<div class="demand-mini"><div><b>${d.name} · ${d.trip}</b><small>${d.choice}</small></div><span class="status-pill ${d.cls}">${d.status}</span></div>`).join('');
 merchantRank.innerHTML=merchants.slice(0,4).map((m,i)=>`<div class="rank-row"><i>${i+1}</i><div><b>${m.name}</b><small>${m.cat} · ${m.goods}个商品</small></div><strong>${m.sales}</strong></div>`).join('');
 demandRows.innerHTML=demands.map(d=>`<tr><td><b>${d.id}</b><small>${d.name} · ${d.phone}</small></td><td><b>${d.trip}</b><small>家庭定制出行</small></td><td>${d.choice}</td><td>${d.budget}</td><td>${d.owner}</td><td><span class="status-pill ${d.cls}">${d.status}</span></td><td><button class="op detail-demand" data-id="${d.id}">查看需求</button></td></tr>`).join('');
 const allOrders=[...orderSeed,...localOrders.map((o,i)=>({id:o.id||'MP-USER-'+i,time:o.date||'用户端订单',user:'体验用户',phone:'—',item:(o.items||[]).map(x=>x.name+' ×'+x.qty).join('、'),merchant:'按商品自动分账',amount:o.amount,status:o.status||'待核销',cls:'info'}))];
 orderRows.innerHTML=allOrders.map(o=>`<tr><td><b>${o.id}</b><small>${o.time}</small></td><td>${o.user}<small>${o.phone}</small></td><td><b>${o.item}</b></td><td>${o.merchant}</td><td><b>${money(o.amount)}</b></td><td><span class="status-pill ${o.cls}">${o.status}</span></td><td><button class="op order-detail" data-id="${o.id}">详情</button> <button class="op order-verify" data-id="${o.id}">核销</button></td></tr>`).join('');
 revenueRows.innerHTML=settlements.map(x=>`<tr><td><b>${x[0]}</b><small>账期 T+7</small></td><td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td><td>${x[4]}</td><td><b>${x[5]}</b></td><td><span class="status-pill ${x[7]}">${x[6]}</span></td><td><button class="op">查看账单</button></td></tr>`).join('');
 merchantCards.innerHTML=merchants.map(m=>`<div class="merchant-card"><div class="merchant-title"><div class="merchant-logo">${m.logo}</div><div><b>${m.name}</b><small>${m.cat}</small></div></div><div class="merchant-data"><div><span>商品</span><b>${m.goods}</b></div><div><span>本月销售</span><b>${m.sales}</b></div><div><span>履约评分</span><b>${m.score}</b></div></div><footer><span class="status-pill ${m.cls}">${m.status}</span><button class="op merchant-detail" data-name="${m.name}">管理商家 →</button></footer></div>`).join('');
 qualificationRows.innerHTML=quals.map(q=>`<tr><td><b>${q.name}</b><small>${q.owner}</small></td><td>${q.cat}</td><td>${q.docs}</td><td>${q.time}</td><td><span class="status-pill ${q.cls}">${q.status}</span></td><td><button class="op qual-review" data-name="${q.name}">${q.status==='已通过'?'查看':'进入审核'}</button></td></tr>`).join('');
 productRows.innerHTML=products.map(p=>`<tr><td><b>${p[0]}</b><small>SKU ${p[1]}</small></td><td>${p[2]}</td><td>${p[3]}</td><td><b>${p[4]}</b></td><td>${p[5]}</td><td><span class="status-pill ${p[7]}">${p[6]}</span></td><td><button class="op product-edit" data-name="${p[0]}">编辑</button> <button class="op">更多</button></td></tr>`).join('');
 bindRows();
}
function openModal(title,sub,body,primary='确认并保存',onPrimary){modalTitle.textContent=title;modalSub.textContent=sub||'';modalBody.innerHTML=`<div class="modal-body">${body}</div>`;modalPrimary.textContent=primary;modalPrimary.onclick=()=>{if(onPrimary)onPrimary();closeModal()};detailModal.classList.add('show')}
function closeModal(){detailModal.classList.remove('show')}
document.querySelectorAll('.close').forEach(x=>x.onclick=closeModal);detailModal.onclick=e=>{if(e.target===detailModal)closeModal()};
function toastMsg(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
function bindRows(){
 document.querySelectorAll('.detail-demand').forEach(b=>b.onclick=()=>{const d=demands.find(x=>x.id===b.dataset.id);openModal('定制需求详情',`${d.id} · 来源：马胖村专题页`,`<div class="detail-grid"><div><span>联系人</span><b>${d.name} ${d.phone}</b></div><div><span>出行信息</span><b>${d.trip}</b></div><div><span>预算范围</span><b>${d.budget}</b></div><div><span>跟进顾问</span><b>${d.owner}</b></div></div><div class="selected-list"><div><b>用户已勾选</b><span>可继续调整</span></div>${d.choice.split(' / ').map(x=>`<div><span>${x}</span><b>已选择</b></div>`).join('')}<div><span>补充需求</span><b>带老人和儿童，希望节奏舒缓</b></div></div>`,'分派顾问并制作方案',()=>toastMsg('已进入方案制作流程'))});
 document.querySelectorAll('.order-verify').forEach(b=>b.onclick=()=>openVerify(b.dataset.id));
 document.querySelectorAll('.order-detail').forEach(b=>b.onclick=()=>openModal('订单详情',b.dataset.id,`<div class="detail-grid"><div><span>支付状态</span><b>已支付</b></div><div><span>履约状态</span><b>待使用</b></div><div><span>核销方式</span><b>统一二维码</b></div><div><span>分账方式</span><b>按商品归属商家</b></div></div><div class="selected-list"><div><b>履约明细</b><span>平台可查看全部</span></div><div><span>茶禾境教基地</span><b>待核销</b></div><div><span>阿婆长桌宴</span><b>待核销</b></div></div>`,'关闭'));
 document.querySelectorAll('.merchant-detail').forEach(b=>b.onclick=()=>openModal('商家管理',b.dataset.name,`<div class="detail-grid"><div><span>商家账号</span><b>已开通</b></div><div><span>结算账户</span><b>已认证</b></div><div><span>资质状态</span><b>审核通过</b></div><div><span>平台服务费</span><b>12%</b></div></div><div class="selected-list"><div><span>账号权限</span><b>商品 / 库存 / 订单 / 核销</b></div><div><span>结算周期</span><b>T+7 自动结算</b></div></div>`));
 document.querySelectorAll('.qual-review').forEach(b=>b.onclick=()=>openModal('资质审核',b.dataset.name,`<div class="selected-list"><div><span>营业执照</span><b>查看原件 ↗</b></div><div><span>法人身份证</span><b>查看原件 ↗</b></div><div><span>行业经营许可</span><b>查看原件 ↗</b></div><div><span>证照有效期</span><b>2029-08-16</b></div></div>`,'审核通过',()=>toastMsg('资质审核结果已保存')));
 document.querySelectorAll('.product-edit').forEach(b=>b.onclick=()=>productForm('编辑商品',b.dataset.name));
}
function openVerify(id=''){openModal('订单核销',id?`订单 ${id}`:'扫描或输入用户核销码',`<div class="form-grid"><label class="wide">核销码<input value="${id?'853 920':''}" placeholder="请输入6位核销码"></label><label>核销项目<select><option>全部项目</option><option>仅核销当前商家项目</option></select></label><label>核销数量<input type="number" value="1"></label><label class="wide">核销备注<textarea placeholder="选填"></textarea></label></div>`,'确认核销',()=>toastMsg('核销成功，库存与订单状态已同步'))}
function productForm(title,name=''){openModal(title,'商品将由平台审核后上架',`<div class="form-grid"><label class="wide">商品名称<input value="${name}" placeholder="请输入商品名称"></label><label>商品类目<select><option>单项体验</option><option>住宿</option><option>餐饮</option><option>交通</option><option>农产品</option></select></label><label>所属商家<select><option>茶禾境教基地</option><option>马胖村云上民宿</option></select></label><label>销售价格<input placeholder="¥ 0.00"></label><label>每日库存<input type="number" value="20"></label><label class="wide">商品说明<textarea placeholder="服务内容、使用规则、提前预约时间"></textarea></label></div>`,'提交审核',()=>toastMsg('商品已提交平台审核'))}
document.querySelectorAll('.tabs').forEach(t=>t.querySelectorAll('button').forEach(b=>b.onclick=()=>{t.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
document.querySelectorAll('.datebar .chip').forEach(b=>b.onclick=()=>{document.querySelectorAll('.datebar .chip').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
verifyBtn.onclick=()=>openVerify();addProduct.onclick=()=>productForm('新增商品');newDemand.onclick=()=>openModal('录入线下定制需求','适用于电话、微信或到店咨询',`<div class="form-grid"><label>联系人<input placeholder="姓名"></label><label>联系电话<input placeholder="手机号"></label><label>出行日期<input type="date"></label><label>同行人数<input type="number" value="2"></label><label>预算范围<input placeholder="如 ¥5,000—8,000"></label><label>意向套餐<select><option>暂不确定</option><option>5天4晚</option><option>3天2晚</option><option>2天1晚</option></select></label><label class="wide">定制需求<textarea placeholder="住宿、体验、用车、饮食等需求"></textarea></label></div>`,'保存并分派',()=>toastMsg('定制需求已录入'));
inviteMerchant.onclick=()=>openModal('邀请商家入驻','生成专属入驻邀请',`<div class="form-grid"><label>商家名称<input placeholder="请输入"></label><label>联系人手机<input placeholder="用于接收入驻短信"></label><label class="wide">经营类目<select><option>住宿</option><option>餐饮</option><option>体验项目</option><option>交通</option><option>农产品</option></select></label></div>`,'发送邀请',()=>toastMsg('入驻邀请已发送'));
window.onstorage=render;render();setPage(location.hash.slice(1)||'dashboard',false);
