import React from "react";
import {
  ExtensionOutlined,
  TrendingUp,
  InsightsOutlined,
  SmartToyOutlined,
  NotificationsActiveOutlined,
  AutoGraphOutlined,
} from "@mui/icons-material";

const appList = [
  {
    name: "Sentinel",
    description: "Set real-time alerts on stocks, indices, and more",
    icon: <NotificationsActiveOutlined style={{ fontSize: '24px' }} />,
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.1)",
  },
  {
    name: "Streaks",
    description: "Create & backtest trading strategies without coding",
    icon: <InsightsOutlined style={{ fontSize: '24px' }} />,
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.1)",
  },
  {
    name: "Smallcase",
    description: "Invest in portfolios of stocks & ETFs curated by experts",
    icon: <AutoGraphOutlined style={{ fontSize: '24px' }} />,
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.1)",
  },
  {
    name: "Sensibull",
    description: "Options trading simplified with analytics & strategies",
    icon: <TrendingUp style={{ fontSize: '24px' }} />,
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.1)",
  },
  {
    name: "Quicko",
    description: "File your tax returns, track capital gains on trades",
    icon: <SmartToyOutlined style={{ fontSize: '24px' }} />,
    color: "#06b6d4",
    bg: "rgba(6, 182, 212, 0.1)",
  },
];

const Apps = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{
          padding: '8px',
          background: 'var(--accent-glow)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
        }}>
          <ExtensionOutlined style={{ fontSize: '22px', color: 'var(--accent-primary-light)' }} />
        </div>
        <div>
          <h3 className="title" style={{ margin: 0 }}>Apps & Integrations</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: 0 }}>
            Extend your trading experience
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
      }}>
        {appList.map((app, index) => (
          <div
            key={index}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '22px',
              transition: 'all 250ms ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${app.color}33`;
              e.currentTarget.style.boxShadow = `0 0 20px ${app.color}10`;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              background: app.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: app.color,
              marginBottom: '14px',
            }}>
              {app.icon}
            </div>
            <h4 style={{
              fontSize: '15px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '6px',
            }}>
              {app.name}
            </h4>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: '1.5',
              margin: 0,
            }}>
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Apps;
