import Menu from "./Menu";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

const TopBar = ({ username, onLogout }) => {
  // Mock data - in a real app, this would come from an API
  const indices = [
    { name: "NIFTY 50", points: 22123.45, change: "+0.85%", changeValue: "+187.95", isPositive: true },
    { name: "SENSEX", points: 72234.56, change: "+0.72%", changeValue: "+516.48", isPositive: true }
  ];

  return (
    <div className="topbar-container">
      <div className="indices-container">
        {indices.map((index, idx) => (
          <div key={idx} className={index.name.toLowerCase().replace(' ', '')}>
            <p className="index">
              <span className="live-dot"></span>
              {index.name}
            </p>
            <p className="index-points" style={{ color: index.isPositive ? 'var(--green)' : 'var(--red)' }}>
              {index.points.toLocaleString('en-IN')}
            </p>
            <p className="percent" style={{
              color: index.isPositive ? 'var(--green)' : 'var(--red)',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              fontSize: '11px'
            }}>
              {index.isPositive ? (
                <TrendingUp style={{ fontSize: '13px' }} />
              ) : (
                <TrendingDown style={{ fontSize: '13px' }} />
              )}
              {index.change}
            </p>
          </div>
        ))}
      </div>

      <Menu username={username} onLogout={onLogout} />
    </div>
  );
};

export default TopBar;