import React from "react";
import { getDay, getHourseMin, getMonth } from "../../utilities/dateUtility";
import {
  AttendeeImg,
  CardBody,
  CardButton,
  CardDescription,
  CardImg,
  Status,
  CardTitle,
  CardWrap,
  LowerSection,
  ButtonIcon,
  ButtonText,
} from "./Card.style";

const Card = ({
  title,
  description,
  date,
  location,
  buttontext,
  buttonOnClick,
  attendees,
  status,
}) => {
  const { dayName, dayNum } = getDay(date.time);
  const month = getMonth(date.time);
  const fromTime = getHourseMin(date.from);
  const toTime = getHourseMin(date.to);

  return (
    <CardWrap>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription icon={"time.png"}>
          {dayName} {month} {dayNum},{fromTime} - {toTime}{" "}
        </CardDescription>
        <CardDescription icon={"description.png"}>
          {description}
        </CardDescription>
        <CardDescription icon={"location.png"}>{location}</CardDescription>
      </CardBody>
      <CardBody>
        <Status>{status}</Status>
        <LowerSection>
          <CardButton onClick={buttonOnClick}>
            <ButtonIcon src={"video.png"} />
            <ButtonText>Join Call</ButtonText>
          </CardButton>
          {attendees.map((attendee) => {
            return <AttendeeImg key={attendee.id} src={attendee.img} />;
          })}
        </LowerSection>
      </CardBody>
    </CardWrap>
  );
};
export default Card;
