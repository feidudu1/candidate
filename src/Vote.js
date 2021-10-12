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
        <b>今天是：</b>
        <div className="bluebold">{moment().format("YYYY-MM-DD hh:mm:ss")}</div>
        <br />
        <b>
          请在浏览器中查看操作步骤
          <a
            href="https://mp.weixin.qq.com/s/QKofMt3HnZhzqvELUeWmfQ"
            target="_blank"
            rel="noreferrer"
          >
            投票操作指南链接
          </a>
        </b>
        <br />
        <b>投票开始后，本网站将提供投票入口！！敬请期待</b>
        {/* <b>在微信中扫描下面小程序投票！</b> */}
        <br />
        {/* <br /> */}
        {/* <div style={{ textAlign: "center" }}>
          <img src="/vote.png" className="imgwechat" />
        </div> */}
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
              人数要求太多，请大家积极投票！！！！送票上门不需要核对身份证，自己去第三方取票，需要带上身份证明。
            </div>
          </div>
          （2）第一轮投票为54选8，入选8人要求党员过半。并且每个人最多只能选8个人，超出8人则此票作废。
          <div>
            个人建议大家：
            <div>
              <span className="redbold">只能投8票</span>，并且其中
              <span className="redbold">党员人数不少于4人！</span>
            </div>
            <div>
              选好后请仔细确认
              <span className="redbold">
                人数不能超过8人！不能超过8人！不能超过8人！否则作废！
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
