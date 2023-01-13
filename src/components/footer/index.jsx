import React from "react";
import PropTypes from "prop-types";
import siteConfig from "../../../site_config/site";
import { getLink } from "../../../utils";
import "./index.scss";

const propTypes = {
  logo: PropTypes.string.isRequired, // logo地址
  language: PropTypes.oneOf(["zh-cn", "en-us"]),
};
const LicenseLogo =
  "https://img.alicdn.com/imgextra/i4/O1CN019fTXYL1tVSMxQUfXI_!!6000000005907-1-tps-65-70.gif";
const RecordLogo =
  "https://img.alicdn.com/imgextra/i4/O1CN01Yy52TB1LzVPtZYepI_!!6000000001370-2-tps-20-20.png";
class Footer extends React.Component {
  render() {
    const { logo, language } = this.props;
    const dataSource = siteConfig[language];
    return (
      <footer className="footer-container">
        <div className="footer-body">
          <img src={getLink(logo)} />
          <p className="docsite-power">website powered by docsite</p>
          <div className="cols-container">
            <div className="col col-12">
              <h3>{dataSource.vision.title}</h3>
              <p>{dataSource.vision.content}</p>
            </div>
            <div className="col col-6">
              <dl>
                <dt>{dataSource.documentation.title}</dt>
                {dataSource.documentation.list.map((d, i) => (
                  <dd key={i}>
                    <a href={getLink(d.link)} target={d.target || "_self"}>
                      {d.text}
                    </a>
                  </dd>
                ))}
              </dl>
            </div>
            <div className="col col-6">
              <dl>
                <dt>{dataSource.resources.title}</dt>
                {dataSource.resources.list.map((d, i) => (
                  <dd key={i}>
                    <a href={getLink(d.link)} target={d.target || "_self"}>
                      {d.text}
                    </a>
                  </dd>
                ))}
              </dl>
            </div>
          </div>
          <div className="copyright">
            <span>{dataSource.copyright}</span>
          </div>
          <div className="record">
            <div>
              <a
                target="_blank"
                href="http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301000000126540"
              >
                <img
                  src={getLink(LicenseLogo)}
                  style={{ width: 20, height: 20, marginRight: 8 }}
                />
              </a>
            </div>

            <div style={{ marginRight: 12 }}>
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016922"
              >
                <img
                  src={getLink(RecordLogo)}
                  style={{ width: 20, height: 20, margin: 0 }}
                />
                <span>浙公网安备 33011002016922号</span>
              </a>
            </div>
            <div>
              <a href="https://beian.miit.gov.cn/" target="_blank">
                浙ICP备12022327号-1119
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;
