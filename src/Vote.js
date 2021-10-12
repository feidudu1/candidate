import moment from "moment";

function Vote() {
  return (
    <div className="content vote">
      <br />
      <div className="timeNote">
        <div>
          <b>投票时间：</b>
          <div className="bluebold">2021年10月14日—2021年10月23日12时</div>
        </div>
        <b>当前时间：</b>
        <div className="bluebold">{moment().format("YYYY-MM-DD HH:mm:ss")}</div>
        <br />
        <div style={{ lineHeight: 1.8 }}>
          <b>
            记不住候选人编号？不知道怎么投票？ <br />
            教你如何一边
            <a href="https://1vt.top/wycm" rel="noreferrer">
              去官网投票
            </a>
            ，一边查看候选人信息 和
            <a
              href="https://mp.weixin.qq.com/s/dL_pknAdcoMQ2kIyw22GFg"
              rel="noreferrer"
            >
              查看投票操作指南
            </a>
            ？
          </b>
        </div>

        <br />
        {`操作步骤如下： 
  （1）点击本网站右上角三个点
  （2）点击网页下方“在默认浏览器中打开”
  （3）这时便可以在默认浏览器中查看本网页，然后回到微信点击上面的“去官网投票”进行投票。
  `}
        <div style={{ textAlign: "center" }}>
          <img
            src={process.env.PUBLIC_URL + "/note.png"}
            className="imgwechat"
          />
        </div>
        <br />
        <div>上门投票服务：2021年10月20日--10月21日（下午17:00-下午20:00）</div>
        <div>
          固定票箱点：越秀星汇园3幢物业服务中心前架空层2021年10月16日（14：00-19:00）和2021年10月17日（9:00-19:00）
        </div>
      </div>
      <div>
        <h4>解读《关于越秀星汇园第一届业主委员会委员候选人差额选举的公告》</h4>
        <h4>本次投票限制较多：</h4>
        <div>
          （1）要求有2/3以上业主人数且拥有专有部分面积占2/3以上，并且此次不接受业主委托投票，并提供有效身份证件
          <div>
            个人建议大家：
            <div className="redbold">
              人数要求太高，请大家积极投票！！！！送票上门不需要核对身份证，自己去第三方取票，需要带上身份证明。
            </div>
          </div>
          （2）第一轮投票为54选8，入选8人要求党员过半。并且每个人最多只能选8个人，超出8人则此票作废。
          <div>
            个人建议大家：
            <div>
              <span className="redbold">只能投8票</span>，并且其中
              <span className="redbold">党员人数不少于4人！</span>
              建议年长年轻男女搭配，工程财务律师文宣专业搭配
            </div>
            <div>
              选好后请仔细确认
              <span className="redbold">
                人数不能超过8人！不能超过8人！不能超过8人！否则作废！
              </span>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
