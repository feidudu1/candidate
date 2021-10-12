import { useState } from "react";
import { Tabs, List, Popup, Space } from "antd-mobile";
import Vote from "./Vote";
import users from "./data";

import "./App.css";

function Detail(props) {
  return (
    <Popup
      visible={props.visible}
      onMaskClick={() => {
        props.setVisible(false);
      }}
      bodyStyle={{ height: "46vh" }}
    >
      <div className="detail">
        <Space direction="vertical">
          <div className="detailText">{props.info.detail}</div>
        </Space>
      </div>
    </Popup>
  );
}

function Candidates() {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({});
  return (
    <div className="content">
      <br />
      <div style={{ marginBottom: "12px" }}>
        第一轮投票为<span className="redbold">54选8</span>，
        <span className="redbold">入选8人要求党员过半！！！</span>
        建议年长年轻男女搭配，工程财务律师文宣专业搭配，选
        <span className="redbold">4个党员，4个群众！！！</span>
      </div>
      <List>
        {users.map((user) => (
          <div
            className="item"
            onClick={() => {
              setDetail(user);
              setVisible(true);
            }}
            key={user.name}
          >
            <div className={`mark ${user.type === 1 ? "red" : "blue"}`}>
              <div>{user.type === 1 ? "党员" : "群众"}</div>
            </div>
            <List.Item
              prefix={
                <div className={`prefixNo ${user.type === 1 ? "red" : "blue"}`}>
                  {user.name}
                </div>
              }
              description={user.description}
            >
              <div>
                <span className="prefixText">
                  <span>竞选编号:</span>
                  {user.id}
                </span>
              </div>
            </List.Item>
          </div>
        ))}
      </List>
      <div
        style={{
          margin: "0px 5px 40px",
          whiteSpace: "pre-wrap",
          lineHeight: "1.2rem",
        }}
      >
        {`
      注意：
        以上为本人从各种渠道搜集的候选人详细信息整理而成，仅供各业主邻居投票选举时参考。
        因为网页的传播性质，为避免涉及个人信息泄露等纠纷，同时也因为本人认知所限，目前只记录了部分候选人的信息。
        转发仅限业主群和业主之间，否则后果自负。
        如有候选人想详细介绍自己，欢迎将自我介绍发至邮箱tianbian5@163.com，我收到后会尽量及时更新。`}
      </div>
      <Detail visible={visible} setVisible={setVisible} info={detail} />
    </div>
  );
}

function App() {
  return (
    <Tabs defaultActiveKey="vote">
      <Tabs.TabPane title="候选人详细介绍" key="candidates">
        <Candidates />
      </Tabs.TabPane>
      <Tabs.TabPane title="投票" key="vote">
        <Vote />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default App;
