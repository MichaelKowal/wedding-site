import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import data from "../../data/hmData.json";
import { HMItem, isHMItems } from "../../utils/HMItem";
import HMCard from "./HMCard";
import HMDot from "./HMDot";

const HMTimeline: React.FC = () => {
  if (!isHMItems(data.items)) {
    return null;
  } else {
    return (
      <Timeline
        sx={{
          paddingRight: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {data.items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  backgroundColor: index > 0 ? "" : "transparent",
                }}
              />
              <TimelineDot color="primary">
                <HMDot icon={item.icon} />
              </TimelineDot>
              <TimelineConnector
                style={{
                  backgroundColor:
                    index < data.items.length - 1 ? "" : "transparent",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <HMCard item={item as HMItem} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
};

export default HMTimeline;
