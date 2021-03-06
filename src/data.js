const users = [
  {
    id: 1,
    type: 1,
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "王益定",
    description: "中共党员 30岁 男 建筑设计 本科 13-1-904",
    detail: `
      本人王益定，候选人选号为1号，中共党员，13-1-904业主。
      现从事建筑结构设计工作，就业于中建三局第二建设工程有限责任公司浙江建筑设计院（原杭州市人防院）。平时工作主要从事房建、公建项目主楼及地库结构设计、景观配套工程结构设计、校对施工图图纸、与项目公司沟通协调等。
      以上信息真实无误，望大家选我。
      若我当选后，认真踏实、公正廉洁为大家办实事。因我从事土建设计工作多年，对于工程具有一定经验，能对各种土建、道路、景观等维护提供一定专业的意见，并且监督各种施工次序是否符合规范要求。从而提升本小区的居住品质，建设美丽小区！
    `,
  },
  {
    id: 2,
    type: 1,
    name: "王潇",
    description: "中共党员 34岁 男 高级工程师 硕士 14-2-503",
    detail: `
      各位业主好，本人王潇，参选序号2号，中共党员，14-2-503业主，就职于某新能源公司技术中心，主要从事机械振动和噪声的测试和研究工作。
      曾多次参加小区公共事务的维权和监督，如小区内部道路路面和地面车位整改，入户大厅整改等。
      如能当选，将从以下几点着手：
        1.坚持为全体业主服务，公平公正，保证信息公开透明；
        2.提议物业增加、完善小区各项配套建设，如丰富儿童区、增建篮球场、老年人活动中心之类；
        3.改善小区绿化环境；
        4.加强小区安全管理，包括门禁、快递、外卖等；
        5.多开展有特色的文体活动，增强小区业主幸福感和归属感。
      请大家投我一票，我的候选人序号是2号。
    `,
  },
  {
    id: 15,
    type: 1,
    name: "金念州",
    description: "中共党员 57岁 男 会计师 大专 2-2-2005",
    detail: `
      本人金念州，2-2-2005业主，候选人序号15，中共党员，会计师职称；
      在单位任职财务负责人，主要是设置会计科目、规范管理制度、分析经营状况、单位效益审计和相关合同审核签订等。
      望大家投票选我！
      如能当选，定会廉洁公平办事！主要监督物业公司在财务核算、经营性收支及预算管控方面发挥自己的专长，为大家庭服务！
      记得投票给15号哦！谢谢各位业主！！
    `,
  },
  {
    id: 17,
    type: 1,
    name: "贺志高",
    description: "中共党员 34岁 男 项目经理 本科 2-1-1004",
    detail: `
      我是17号候选人贺志高，党员，现任某外资咨询公司测试项目经理。
      精通日语英语，有多次海外工作经验。曾经在北京天津上海等多地多企业多领域工作过。
      擅长人员管理，资源管理，预算管理和多方协调。
      做事原则是凡事尽善尽美，做好本职工作。处事风格是公平，公正，按规矩来。
    `,
  },
  {
    id: 21,
    type: 1,
    name: "傅桃圆",
    description: "中共党员 35岁 女 企宣副总 大专 13-2-902",
    detail: `
      各位小区业主大家好，本人傅桃圆，参选序号21号，中共党员，13-2-902业主，企业副总，知名企宣，资深写手
      从事音乐、艺人、企业运营、大型活动等宣发推广业务十余年，有较好的文字功底、媒体资源、策划能力、活动组织能力等，善于娱乐营销。
      愿意为小区贡献自己的力量，自入住小区以来我们夫妇积极参加小区外围道路整改维权，小区安全门禁问题维权，社区会议参与等事项，积极推动业委会成立并提出方案意见
      如能当选，将继续为小区服务，以公平公开公正廉洁要求自己，维护业主利益，监督物业服务质量水平，改善小区居住环境，改善小区信息化程度，进而稳步提升小区居民居住幸福指数，为建设一个美丽小区家园而努力
      望大家投我一票，我是参选人21号，傅桃圆.
    `,
  },
  {
    id: 22,
    type: 1,
    name: "端木利亚",
    description: "中共党员 31岁 女 工程师 研究生 2-1-2304",
    detail: `
      我是22号，端木利亚，来自2栋，中共党员，在某互联网公司安全部从事流量安全相关工作。
      工作无需出差，有精力为小区居住环境贡献自己的一份力。
      若能当选，一定坚持信息公开透明，竭尽所能推进现有小区未解决问题尽快得到解决。
      若不能当选，也会在组织需要时，尽自己的一份力。
    `,
  },
  {
    id: 20,
    type: 2,
    name: "黄思远",
    description: "群众 31岁 男 工程师 研究生 1-1-204",
    detail: `
      候选人序号20号，姓名 黄思远，男，31岁，研究生学历，群众；
      1-1-204业主，目前就职于某软件公司，任架构师一职。
      工作时间规律固定，能积极参与到业委会的各项工作中来，曾多次与物业反馈楼栋、小区环境问题，对公共事业有热心。
      我的优势，有热心，无私心，公平公正的处理小区的各项事宜；
      家人从事政府公共资金绩效管理咨询服务，熟知公共政策及政府部门工作流程，与杭州市住保房管局物业管理处有过合作，如通过正规渠道协调处理小区难点事宜。
    `,
  },
  {
    id: 27,
    type: 2,
    name: "任国强",
    description: "群众 65岁 男 会计师 大专 3-1-502",
    detail: `
      本人：任国强，候选人选号为27号，群众，3-1-502的业主。
      大专学历，会计师，现已退休。
      本人从房子交付时开始为小区公共事务，从售楼大厅到维多利亚地产商杭州总部，在从临平区政府到良渚街道及社区为广大业主利益维权，本人基本全程参与。
      若我当选，最大的优势是退休有时间更好的督促物业根据业主合理的要求做好工作。
      本人这是来参与参与。请大家来投我一票，候选人号27号，谢谢
    `,
  },
  {
    id: 31,
    type: 2,
    name: "吴妍",
    description: "群众 27岁 女 教师 本科 10-1-2003",
    detail: `
      候选人序号31号，姓名：吴妍；10-1-2003业主
      就职于杭州某小学，主要从教学、组织活动、家校沟通等工作。
      家父吴新华是建筑设计公司负责人及二级建造师，同时为本小区议事小组成员。
      曾为本小区外围道路施工质量问题，积极与社区及施工方沟通协调，凭专业识和本着为小区集体住户的利益，和小区的提升和工程质量反映社区和地产领导沟通！
      如能当选我会利用我的特长和家父的专业，协调能力及空余时间，为广大业主服务，廉洁，公正。努力我小区品质，优化小区居住环境做出自己贡献，同时希望大家监督和努力吧！
    `,
  },
  {
    id: 39,
    type: 2,
    name: "周仁亮",
    description: "群众 32岁 男 设计师 大专 13-2-603",
    detail: `
      各位小区业主大家好，本人周仁亮，候选人序号39号，是13幢2单元603室的业主，一名群众，在公司担任副总，国家级高级茶艺师，国家级高级评茶师，主要分管公司销售业务，产品对外开发，外联等工作。以上信息真实无误，希望大家选我。本人自愿参加业主委员会工作，为明确本人的职责义务，书面承诺如下:
      一、本人提交的简历、房地产权证、身份证和有关资历证明完全属实。
      二、本人以及近-亲属与本小区建设单位和物业服务企业无任何利害关系;
      三、本人承诺在业主委员会任职期间自觉学习物业管理相关知识。
      四、坚持公平、公开、公正处理小区相关事宜，坚决维护全体业主的共同利益，决不利用业 主委员会身份谋取任何个人利益;
      望大家投我一票，我是参选人39号
    `,
  },
  {
    id: 46,
    type: 2,
    name: "胡乃瀚",
    description: "群众 33岁 男 软件开发 本科 6-1-603",
    detail: `
      本人胡乃瀚，候选人选号为46号，群众，6-1-603业主。
      现从事IT行业，工作比较弹性，主要负责项目实施和项目个性化需求开发等工作。
      以上信息真实无误，希望大家选我。
      若我当选后，目标是做到以下几点:
        一、坚持公开透明原则，拒绝贪腐，目标是做到小区的每一笔收支都公开出来，让全体业主共同监督；
        二、查找小区公共区域存在的问题，监督物业和开发商整改；
        三、提升小区绿化景观游乐休闲设施品质，做好整体规划；
        四、做好物业管理的工作，督促物业按照合同提供服务，管理好小区，让业主们都住的安心舒心。
      我是46号胡乃瀚，请大家投我一票！
    `,
  },
  {
    id: 49,
    type: 2,
    name: "倪金伟",
    description: "群众 65岁 男 企业法人 初中 13-1-301",
    detail: `
      各位业主你们好，本人倪金会，参选序号49号，群众，是13幢1单元301室业主。
      我曾担任企业法人近30年，现已退休
      自入住星汇园小区以来，本着以提高小区品质，改善小区居住环境多次参与有关小区事务忇调，提议，监督，（特别是在小区外围道路维监，提议电瓶车上下道玻璃顶蓬修建，房屋过道顶泥子粉脱落，及砖磁砖问题，小区南面空地复绿等问题，及参加自愿者服务。
      在这次业委会中希望大家投我一票，可能我学历没有其他高，但如能当选我会利用多年来管理，协调能力及空余时间，为广大业主服务，廉洁，公正。想为业主想，为努力我小区品质，优化小区居住环境做出自己贡献，同时希望大家监督。
    `,
  },
  {
    id: 50,
    type: 2,
    name: "倪剑",
    description: "群众 40岁 男 工程师 本科 3-2-701",
    detail: `
      本人倪剑，候选人序号50号，3-2-701业主，就职于某外资医药公司，IT运维，主要从事设备资产管理、突发问题根源分析、服务管理时效跟踪、保障实施过程中的规范性和计划性等工作。
      如能当选，必当以小区业主利益为重，坚持信息公开透明原则，建立业主间良性沟通的桥梁，督促物业提高管理服务质量和水平，改善小区居住环境，使我们房产能在物业优质管理中实现保值增值。
      请大家投我一票，我是50号候选人倪剑。
    `,
  },
  {
    id: 53,
    type: 2,
    name: "蒋林斌",
    description: "群众 37岁 男 IT经理 大专 3-1-804",
    detail: `
      候选人序号53号，姓名：蒋林斌；3-1-804业主
      就职于某网络公司经理，主要从事网络安全软硬件设备销售与管理、对于突发性问题的处理和分析、擅长人员管理及协调工作，做事认真负责。
      曾跟物业多次反映小区绿化，人员出入，发传单还有卫生等问题，如能当选：
        一、首先以小区业主利益为重，信息公开透明化；
        二、做好邻里之间的友好桥梁；
        三、改善小区绿化环境，
        四、提高小区安全居住，提升小区安全品质，
        五、监督物业，督促物业；
      同时能在业委会同仁的共同努力下使大家的房产都能得到增值；
      请大家投我一票！
    `,
  },
];

export default users;
