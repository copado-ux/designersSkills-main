import { Category } from './components/Category';
import { Skill } from './components/Skill';

import categories from './data/categories'
import { line, divider, logo } from './icons';

const { widget } = figma;
const {
  useSyncedState,
  useSyncedMap,
  usePropertyMenu,
  AutoLayout,
  Frame,
  Rectangle,
  Input,
  Text,
  SVG,
} = widget;

function Widget() {
  const voteMap = useSyncedMap<number>("skill-level")
  const voteFutureMap = useSyncedMap<number>("skill-future-level")
  const [userLevel, setUserLevel] = useSyncedState<number>('level', 0)
  const [showLevels, setShowLevels] = useSyncedState<boolean>("isShown", false)
  const [status, setStatus] = useSyncedState<string>("status", "Current")
  const statusOptions = [{ option: "Current", label: "Current" }, { option: "Future", label: "Future" }]

  const [text, setText] = useSyncedState("text", "Type Your Name");


  const syncUserLevel = () => {
    let total = 0;

    voteMap.values().forEach(value => {
      total += value
    })

    const average = Math.round(total / voteMap.values().length)

    setUserLevel(average)
  }

  usePropertyMenu(
    [
      {
        itemType: 'dropdown',
        propertyName: 'statuses',
        tooltip: 'Status',
        selectedOption: status,
        options: statusOptions,
      },
      {
        itemType: 'separator'
      },
      {
        itemType: 'action',
        tooltip: 'Show/hide levels',
        propertyName: 'levelToggle'
      }
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === "statuses") {
        setStatus(propertyValue)
      } else if (propertyName == "levelToggle") {
        setShowLevels(!showLevels);
      }
    },
  )
  return (
    <Frame
      name="Everything"
      width={status == "Future" ? 10000 : 10000}
      height={1100}
      fill={status == "Current" ? "#FFFFFF" : "#FCFCFC"}
      stroke={status == "Current" ? "#DBDBDB" : "#4584BF"}
      strokeWidth = {status == "Current" ? 3 : 8}
      cornerRadius={10}
      effect={[
        {
          type: "drop-shadow",
          color: "#9747FF0A",
          offset: {
            x: 0,
            y: 3,
          },
          blur: 57,
          showShadowBehindNode:
            false,
        },
        {
          type: "drop-shadow",
          color: "#0D99FF0A",
          offset: {
            x: 0,
            y: 2,
          },
          blur: 30,
          showShadowBehindNode:
            false,
        },
        {
          type: "drop-shadow",
          color: "#14AE5C0A",
          offset: {
            x: 0,
            y: 1,
          },
          blur: 18,
          showShadowBehindNode:
            false,
        },
        {
          type: "drop-shadow",
          color: "#FFD54B0D",
          offset: {
            x: 0,
            y: 0,
          },
          blur: 6,
          showShadowBehindNode:
            false,
        },
      ]}

    >

      <AutoLayout
        name='leftPanel'
        x={0}
        y={0}
        width={1000}
        height={1100}
        stroke="#DBDBDB"
        strokeWidth={3}
        spacing={64}
        padding={64}
        direction='vertical'
        horizontalAlignItems="center"


      >
          <AutoLayout
        name='text'
        width={'fill-parent'}
        height={'hug-contents'}
        spacing={0}
        padding={0}
        direction='vertical'
        horizontalAlignItems="center"


      >  
      
       <Text
      name={status}
      key={status}
      //hidden = { hideCategory ? true : false }
      fill={"#A7A7A7"}
      x={82}
      y={50}
      width={800}
      height={50}
      verticalAlignText="center"
      horizontalAlignText="center"
      lineHeight="150%"
      fontFamily="Inter"
      fontSize={36}
      letterSpacing={1.536}
      fontWeight={700}
    >
      Product Design Team
    </Text>
              <Text
      name={status}
      key={status}
      //hidden = { hideCategory ? true : false }
      fill={"#A7A7A7"}
      x={82}
      y={50}
      width={800}
      height={50}
      verticalAlignText="center"
      horizontalAlignText="center"
      lineHeight="150%"
      fontFamily="Inter"
      fontSize={86}
      letterSpacing={1.536}
      textCase="upper"
      fontWeight={700}
    >
      Skill Mapping
    </Text>
           <Text
          name={status}
          key={status}
          //hidden = { hideCategory ? true : false }
          fill={status == "Current" ? "#4584BF" : "#7223C2"}
          x={82}
          y={50}
          width={800}
          height={50}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight="150%"
          fontFamily="Inter"
          fontSize={36}
          letterSpacing={1.536}
          textCase="upper"
          fontWeight={700}
        >
          {status} Status
        </Text>
     
    </AutoLayout>
        <Input
          fill="#555"
          fontSize={64}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight="150%"
          fontFamily="Inter"
          letterSpacing={1.536}
          textCase="upper"
          fontWeight={700}
          height="fill-parent"
          inputBehavior="multiline"
          inputFrameProps={{
            effect: {
              type: "drop-shadow",
              color: { r: 0, g: 0, b: 0, a: 0 },
              offset: { x: 0, y: 0 },
              blur: 2,
              spread: 2,
            },
            horizontalAlignItems: "center",
            padding: 8,
            verticalAlignItems: "center",
          }}
          onTextEditEnd={(e) => setText(e.characters)}
          value={text}
          width={'fill-parent'}
        />
    <AutoLayout
        name='text'
        width={'fill-parent'}
        height={'hug-contents'}
        spacing={16}
        padding={0}
        direction='vertical'
        horizontalAlignItems="center"


      >  
   
       <Text
      name={status}
      key={status}
      //hidden = { hideCategory ? true : false }
      fill={"#A7A7A7"}
      x={82}
      y={50}
      width={800}
      height={50}
      verticalAlignText="center"
      horizontalAlignText="center"
      lineHeight="150%"
      fontFamily="Inter"
      fontSize={24}
      letterSpacing={1.536}
      fontWeight={700}
    >Over the mouse on the labels to know more about it    </Text>
      <Rectangle
            name="logo"
            width={800}
            height={20}
          />
          <SVG
            name="Logo"
            src={logo}
          />
    </AutoLayout>
     
      </AutoLayout>

      <Frame
        name="Dividers"
        x={1200}
        y={228}
        width={status == "Future" ? 6000 : 6000}
        height={650}
      >
        <Frame
          name="Divider-L1"
          opacity={0.1}
          x={0}
          y={520}
          strokeWidth={0}
          overflow="visible"
          hidden={showLevels ? true : false}
          width={status == "Future" ? 6000 : 6000}
          height={131.5}
          hoverStyle={{
            opacity: showLevels ? 0.1 : 0.5,
          }}
        >
          <Rectangle
            name="Divider-L1-Bg"
            y={1.5}
            fill="#FFF"
            width={150}
            height={130}
          />
          <SVG
            name="Divider-L1-Line"
            height={3}
            width={status == "Future" ? 6000 : 6000}
            opacity={userLevel == 1 ? 1 : 1}
            src={divider}
          />
        </Frame>
        <Frame
          name="Divider-L2"
          opacity={0.1}
          y={390}
          strokeWidth={0}
          overflow="visible"
          width={status == "Future" ? 6000 : 6000}
          height={130.5}
          hidden={showLevels ? true : false}
          hoverStyle={{
            opacity: showLevels ? 0.1 : 0.5,
          }}
        >
          <Rectangle
            name="Divider-L2-Bg"
            y={0.5}
            fill="#FFF"
            width={150}
            height={130}
          />
          <SVG
            name="Divider-L2-Line"
            height={3}
            width={status == "Future" ? 6000 : 6000}
            opacity={userLevel == 2 ? 1 : 1}
            src={divider}
          />
        </Frame>
        <Frame
          name="Divider-L3"
          opacity={0.1}
          y={260.5}
          strokeWidth={0}
          overflow="visible"
          width={status == "Future" ? 6000 : 6000}
          height={130}
          hidden={showLevels ? true : false}
          hoverStyle={{
            opacity: showLevels ? 0.1 : 0.5,
          }}
        >
          <Rectangle
            name="Divider-L3-Bg"
            fill="#FFF"
            width={150}
            height={130}
          />
          <SVG
            name="Divider-L3-Line"
            y={0.5}
            height={3}
            width={status == "Future" ? 6000 : 6000}
            opacity={userLevel == 3 ? 1 : 1}
            src={divider}
          />
        </Frame>
        <Frame
          name="Divider-L4"
          opacity={0.1}
          y={130}
          strokeWidth={0}
          overflow="visible"
          hidden={showLevels ? true : false}
          width={status == "Future" ? 6000 : 6000}
          height={130.5}
          hoverStyle={{
            opacity: showLevels ? 0.1 : 0.5,
          }}
        >
          <Rectangle
            name="Divider-L4-Bg"
            y={0.5}
            fill="#FFF"
            width={150}
            height={130}
          />
          <SVG
            name="Divider-L4-Line"
            height={3}
            width={status == "Future" ? 6000 : 6000}
            opacity={userLevel == 4 ? 0 : 1}
            src={divider}
          />
        </Frame>
        <Frame
          name="Divider-L5"
          opacity={0.1}
          strokeWidth={0}
          overflow="visible"
          width={status == "Future" ? 6000 : 6000}
          height={130.5}
          hidden={showLevels ? true : false}
          hoverStyle={{
            opacity: showLevels ? 0.1 : 0.5,
          }}
        >
          <Rectangle
            name="Divider-L5-Bg"
            y={0.5}
            fill="#FFF"
            width={150}
            height={130}
          />
          <SVG
            name="Divider-L5-Line"
            height={3}
            width={status == "Future" ? 6000 : 6000}
            opacity={userLevel == 5 ? 1 : 1}
            src={divider}
          />
        </Frame>
        <Text
          name="Level-Label"
          y={{
            type: "top",
            offset: 660 - (userLevel * 130),
          }}
          hidden={showLevels ? true : false}
          fill="#A7A7A7"
          width={105}
          lineHeight="150%"
          fontFamily="Inter"
          letterSpacing={1.456}
          fontWeight={700}
        >
          Skill LEVEL ({userLevel})

        </Text>
        <SVG
          name="Divider-Line-Active"
          y={{
            type: "top",
            offset: 650 - (userLevel * 130),
          }}
          hidden={showLevels ? true : false}
          height={3}
          width={status == "Future" ? 6000 : 6000}
          src={line}
        />
      </Frame>
      
      <AutoLayout
        name="Container"
        verticalAlignItems={"center"}
        x={1300}
        y={100}
        spacing={32}
        padding={64}
        cornerRadius={8}
        direction='vertical'
      >

        
        <AutoLayout
          name="Skills"
          overflow="visible"
          spacing={30}
        >
          
          {categories.map((category) => {
            const { name: categoryName, color, skillDescriptions } = category

            return category.skills.map((skill, index) => Skill({
              name: skill,
              category: categoryName,
              color,
              skillDescription: skillDescriptions[index],
              skillKey: `${category.name}-${skill}`,
              status,
              showLevels,
              voteMap,
              voteFutureMap,
              onChange: syncUserLevel
            }));
          })}
          
        </AutoLayout>
        <AutoLayout
          name="Categories"
          overflow="visible"
          spacing={30}
        >
          {categories.map((category, index) => Category({ ...category, categoryKey: index }))}
        </AutoLayout>
      </AutoLayout>
    </Frame>
  );
}

widget.register(Widget)
