import React from "react";

// Data API
import { dataCard } from "./DataCard";

// Matrial UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";

// Lucide Icons
import {
  Users,
  MoveUp,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  MoveDown,
} from "lucide-react";

const MainContent = () => {
  const cards = [
    {
      title: "Total Users",
      value: dataCard.totalUsers,
      sub: "+180 this month",
      icon: Users,
      iconColor: "primary",
      trendColor: "success",
      percent: 12,
      trend: "up",
    },
    {
      title: "Revenue",
      value: dataCard.revenue,
      sub: "+$3,200 this month",
      icon: DollarSign,
      iconColor: "success",
      trendColor: "success",
      percent: 5,
      trend: "up",
    },
    {
      title: "Orders",
      value: dataCard.orders,
      sub: "+160 this month",
      icon: ShoppingCart,
      iconColor: "info",
      trendColor: "success",
      percent: 20,
      trend: "up",
    },
    {
      title: "Growth Rate",
      value: dataCard.growth,
      sub: "-0.5% this month",
      icon: TrendingUp,
      iconColor: "danger",
      trendColor: "danger",
      percent: 0.2,
      trend: "down",
    },
  ];

  return (
    <Grid container spacing={3} className="bg-body-secondary p-4 ">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <Card
              sx={{
                minWidth: 200,
                borderRadius: "15px",
                padding: "10px",
              }}
            >
              <CardContent>
                <div className="d-flex justify-content-between">
                  <span
                    className={`text-${card.iconColor} bg-body-secondary p-2 rounded-3 mb-3`}
                  >
                    <Icon className="fs-1" />
                  </span>
                  <span className={`text-${card.trendColor}`}>
                    {card.trend === "up" ? (
                      <MoveUp size={15} />
                    ) : (
                      <MoveDown size={15} />
                    )}
                    {card.percent}%
                  </span>
                </div>
                <span className="fs-6 text-black-50">{card.title}</span>
                <Typography variant="h4">{card.value}</Typography>
                <Typography variant="body2 text-black-50">
                  {card.sub}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainContent;
