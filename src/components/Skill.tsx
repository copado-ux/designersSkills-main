import type { Skill } from "../types";
import { levelDescriptions } from "../data/levelInfo";

const { widget } = figma;
const {
  Frame,
  Rectangle,
  Text,
} = widget;

export function Skill({
  name,
  color,
  skillDescription,
  skillKey,
  status,
  showLevels,
  voteMap,
  voteFutureMap,
  onChange,
}: Skill) {
  const offsetA = 734 - ((voteMap.get(skillKey) || 1) * 130)
  const offsetB = 734 - ((voteFutureMap.get(skillKey) || 1) * 130)

  const currentOpacity = 0.9
  const futureOpacity = 0.3
  const hoverOpacity = 0.4
  //const hideSkill = (status == "Current") || (status == "Future")

  const rectangles = [5, 4, 3, 2, 1].map((data) => {
    const currentPosition = data
    const { description } = levelDescriptions.find(obj => obj.skill === name && obj.level === currentPosition.toString())
    //const opacity = voteFutureMap.get(skillKey) == currentPosition ? futureOpacity : voteMap.get(skillKey) == currentPosition ? currentOpacity : 0;

    let opacity = 0;
    if (voteFutureMap.get(skillKey) == currentPosition) {
      opacity = futureOpacity;
    } else if (voteMap.get(skillKey) == currentPosition) {
      opacity = currentOpacity;
    } 

    if(voteFutureMap.get(skillKey) == currentPosition && voteMap.get(skillKey) == currentPosition){
      opacity = currentOpacity;
    }

 


    return <Rectangle
      name={`Skill-Block-${currentPosition}-${name}`}
      key={`Skill-Block-${currentPosition}-${skillKey}`}
      opacity={opacity}
      y={{ type: "bottom", offset: 1 }}
      fill={color}
      cornerRadius={6}
      width={250}
      height={130 * currentPosition}
      onClick={() => {
        if (status == "Current") {
          voteMap.set(skillKey, currentPosition)
        } else {
          if(currentPosition< voteMap.get(skillKey)){
          voteFutureMap.set(skillKey, voteMap.get(skillKey))
        }else{
          voteFutureMap.set(skillKey, currentPosition)

        }
        }

        onChange?.()
      }}
      hoverStyle={{ opacity: voteMap.get(skillKey) == currentPosition ? 1 : hoverOpacity }}
      //tooltip={description}
    />
  })

  return (
    <Frame
      name={`Skill-${name}`}
      key={`Skill-${skillKey}`}
      //hidden= { hideSkill ? true : false }
      width={250}
      height={716}
    >
    <Rectangle
    name= { `Skill-Block-Bg-${name}` }
    key= { `Skill-Block-Bg-${skillKey}` }
    opacity={0.2}
    y={{
      type: "bottom",
      offset: 1,
    }}
    fill={color}
    cornerRadius={6}
    width={250}
    height={650}
    />
      {rectangles}

      <Text
        name={`Skill-Level-${name}`}
        key={`Skill-Level-${skillKey}`}
        hidden={showLevels ? true : false}
        opacity={voteMap.get(skillKey) ? 0.9 : 0}
        y={{
          type: "top",
          //offset: offsetA,
          offset: (status == "Current" ? (offsetA) : (offsetB))
        }}
        fill={(name == "Content" || name == "Copywriting" || name == "Design" || name == "Systems\u200B") ? "#665200" : "#FFF"}
        width={250}
        height={38}
        horizontalAlignText="center"
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={24}
        letterSpacing={-0.456}
        fontWeight={700}
      >
        {status == "Current" ? (voteMap.get(skillKey)) : ((voteFutureMap.get(skillKey) || "Not Chosen Yet"))}
      </Text>
      <Text
        name={`Skill-Label-${name}`}
        key={`Skill-Label-${skillKey}`}
        fill={color}
        width={250}
        height={50}
        verticalAlignText="center"
        horizontalAlignText="center"
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={20}
        letterSpacing={-0.32}
        fontWeight={700}
        strokeWidth={1.391}
        tooltip={`${skillDescription}`}
      >
        {name}
      </Text>
    </Frame>
  );
}

