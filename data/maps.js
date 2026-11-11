/* 卫戍协议·规程 战场一览（地图来源：PRTS，见 source）。
   场地图放在 assets/maps/ 下；地图专属站位没有官方坐标，不在这里伪造。 */
window.SP_MAPS = {
  source: 'https://prts.wiki/w/%E5%8D%AB%E6%88%8D%E5%8D%8F%E8%AE%AE%C2%B7%E8%A7%84%E7%A8%8B/%E6%88%98%E5%9C%BA%E4%B8%80%E8%A7%88',
  sourceName: 'PRTS · 战场一览',
  missing: ['07', '08'],
  maps: [
    {
      id: '01', label: '#01',
      fields: ['map01-field1.webp', 'map01-field2.webp', 'map01-field3.webp'],
      notes: ['入门协议 / 极速模拟 / 标准模拟 / 规程等级1-4 固定地图。', '也可出现于险境模拟及规程等级5-8。'],
      devices: '阻隔工事',
      special: ''
    },
    {
      id: '02', label: '#02',
      fields: ['map02-field1.webp', 'map02-field2.webp', 'map02-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '',
      special: ''
    },
    {
      id: '03', label: '#03',
      fields: ['map03-field1.webp', 'map03-field2.webp', 'map03-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '阻隔工事、射击台',
      special: ''
    },
    {
      id: '04', label: '#04',
      fields: ['map04-field1.webp', 'map04-field2.webp', 'map04-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '阻隔工事',
      special: '活性源石：部署的友军和经过的敌军攻击力、攻速提升，但持续失去生命。'
    },
    {
      id: '05', label: '#05',
      fields: ['map05-field1.webp', 'map05-field2.webp', 'map05-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '源石流发生装置',
      special: '气流：向前方3格吹出气流；同向 / 逆向部署的干员攻击提升 / 降低，同向 / 逆向移动的敌人移速提升 / 降低。'
    },
    {
      id: '06', label: '#06',
      fields: ['map06-field1.webp', 'map06-field2.webp', 'map06-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '阻隔工事',
      special: '沼泽地段：置于其中的干员攻速逐渐降低，经过的敌人攻速、移速逐渐降低。'
    },
    {
      id: '09', label: '#09',
      fields: ['map09-field1.webp', 'map09-field2.webp', 'map09-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '阻隔工事',
      special: '隐匿模块：位于其上的单位和敌人获得隐匿。'
    },
    {
      id: '10', label: '#10',
      fields: ['map10-field1.webp', 'map10-field2.webp', 'map10-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '盐坨子炮',
      special: ''
    },
    {
      id: '11', label: '#11',
      fields: ['map11-field1.webp', 'map11-field2.webp', 'map11-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '',
      special: ''
    },
    {
      id: '12', label: '#12',
      fields: ['map12-field1.webp', 'map12-field2.webp', 'map12-field3.webp'],
      notes: ['险境 / 绝境 / 终极模拟；规程等级5-20。'],
      devices: '',
      special: '优化模块：位于其上的干员攻速提升；经过的敌人移速提升。'
    }
  ]
};
