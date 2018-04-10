import React from 'react'
import PropTypes from 'prop-types'

function makeOpenBox(title, data) {
  return (
    <div className={title.toLowerCase()}>
      <span className='box-title'>{title}</span>
      <div className='content'>{data}</div>
    </div>
  )
}

export default function SpellCard({
  name, level, mp,
  range, duration,
  target, defense,
  effect,
  school, page
}) {
  const svgWidth = 250
  const svgHeight = 350
  const svgMiddle = svgWidth / 2

  const paddingTop = 10
  const paddingSide = 8
  const paddingBottom = 30

  const verticalGutter = 14
  const middleGutter = 10

  const labelPadding = 3

  const nameHeight = 20
  const nameGutter = 13
  const nameWidth = svgWidth - 2*paddingSide - 2*nameHeight - 2*nameGutter
  const nameFontSize = 11
  const nameMarginBottom = 6
  const nameY = paddingTop
  const nameTextY = nameY + nameHeight - nameMarginBottom
  const nameBottom = nameY + nameHeight

  const boxSize = 20
  const topRowLabelY = paddingTop + boxSize/2
  const labelSize = 7

  const levelLabelX = paddingSide + boxSize + labelPadding
  const mpLabelX = svgWidth - levelLabelX

  const levelContentX = paddingSide + boxSize/2
  const mpContentX = svgWidth - levelContentX

  const smallBoxRow1Y = nameBottom + verticalGutter
  const smallBoxWidth = svgMiddle - paddingSide - middleGutter/2
  const smallBoxHeight = 16
  const leftBoxX = paddingSide
  const rightBoxX = svgMiddle + middleGutter/2

  const smallBoxFontSize = 11
  const smallBoxRow1FontY = smallBoxRow1Y + smallBoxFontSize + 1

  const smallBoxLeftLabelX = leftBoxX + 2
  const smallBoxLeftTextX = leftBoxX + 3

  const smallBoxRightLabelX = rightBoxX + 2
  const smallBoxRightTextX = rightBoxX + 3

  const smallBoxRow2Y = smallBoxRow1Y + smallBoxHeight + verticalGutter
  const smallBoxRow2FontY = smallBoxRow2Y + smallBoxFontSize + 1

  const effectBoxX = paddingSide
  const effectBoxY = smallBoxRow2Y + smallBoxHeight + verticalGutter
  const effectBoxWidth = svgWidth - 2*paddingSide
  const effectBoxHeight = svgHeight - paddingBottom - effectBoxY

  const effectBoxLabelX = effectBoxX + 2
  const effectBoxTextPadding = 4

  const schoolX = paddingSide
  const schoolY = svgHeight - paddingTop
  const schoolFontSize = 18

  const pageBoxHeight = 12
  const pageBoxWidth = 14
  const pageBoxX = svgWidth - paddingSide - pageBoxWidth
  const pageBoxY = svgHeight - paddingTop - pageBoxHeight

  const pageLabelX = pageBoxX - labelPadding + 0
  const pageLabelY = pageBoxY + pageBoxHeight/2 + 2

  const pageContentSize = 6
  const pageContentX = pageBoxX + pageBoxWidth/2
  const pageContentY = pageBoxY + pageBoxHeight - 4
  return (
    <svg className={`spell-card ${school.toLowerCase()}`} width={svgWidth} height={svgHeight}>
      <rect className='card-bg' width={svgWidth} height={svgHeight} rx='10' ry='10'/>
      {/*<rect className='content-bg' x={paddingSide} y={paddingTop} width={svgWidth-2*paddingSide} height={svgHeight-paddingTop-paddingBottom} rx='10' ry='10' />*/}
      <g className='level'>
        <rect className='content-bg' x={paddingSide} y={paddingTop} width={boxSize} height={boxSize} />
        <text className='label-text' transform={`translate(${levelLabelX},${topRowLabelY})rotate(90)`} textAnchor='middle' fontSize={labelSize}>LV</text>
        <text className='content-text' x={levelContentX} y={nameTextY} fontSize={nameFontSize} textAnchor='middle'>{level}</text>
      </g>

      <g className='name'>
        <rect className='content-bg' x={svgMiddle-nameWidth/2} y={nameY} width={nameWidth} height={nameHeight}/>
        <text className='content-text' x={svgMiddle} y={nameTextY} textAnchor='middle' fontSize={nameFontSize}>{name.toUpperCase()}</text>
      </g>

      <g className='mp'>
        <rect className='content-bg' x={svgWidth-boxSize-paddingSide} y={paddingTop} width={boxSize} height={boxSize} />
        <text className='label-text' transform={`translate(${mpLabelX},${topRowLabelY-1})rotate(270)`} textAnchor='middle' fontSize={labelSize}>MP</text>
        <text className='content-text' x={mpContentX} y={nameTextY} fontSize={nameFontSize} textAnchor='middle'>{mp}</text>
      </g>

      <g className='range'>
        <rect className='content-bg' x={leftBoxX} y={smallBoxRow1Y} width={smallBoxWidth} height={smallBoxHeight}/>
        <text className='label-text' x={smallBoxLeftLabelX} y={smallBoxRow1Y-labelPadding} fontSize={labelSize}>Range</text>
        <text className='content-text' x={smallBoxLeftTextX} y={smallBoxRow1FontY} fontSize={smallBoxFontSize}>{range}</text>
      </g>

      <g className='duration'>
        <rect className='content-bg' x={rightBoxX} y={smallBoxRow1Y} width={smallBoxWidth} height={smallBoxHeight}/>
        <text className='label-text' x={smallBoxRightLabelX} y={smallBoxRow1Y-labelPadding} fontSize={labelSize}>Duration</text>
        <text className='content-text' x={smallBoxRightTextX} y={smallBoxRow1FontY} fontSize={smallBoxFontSize}>{duration}</text>
      </g>

      <g className='target'>
        <rect className='content-bg' x={leftBoxX} y={smallBoxRow2Y} width={smallBoxWidth} height={smallBoxHeight}/>
        <text className='label-text' x={smallBoxLeftLabelX} y={smallBoxRow2Y-labelPadding} fontSize={labelSize}>Target</text>
        <text className='content-text' x={smallBoxLeftTextX} y={smallBoxRow2FontY} fontSize={smallBoxFontSize}>{target}</text>
      </g>

      <g className='defense'>
        <rect className='content-bg' x={rightBoxX} y={smallBoxRow2Y} width={smallBoxWidth} height={smallBoxHeight}/>
        <text className='label-text' x={smallBoxRightLabelX} y={smallBoxRow2Y-labelPadding} fontSize={labelSize}>Defense</text>
        <text className='content-text' x={smallBoxRightTextX} y={smallBoxRow2FontY} fontSize={smallBoxFontSize}>{defense}</text>
      </g>

      <g className='effect'>
        <rect className='content-bg' x={effectBoxX} y={effectBoxY} width={effectBoxWidth} height={effectBoxHeight}/>
        <text className='label-text' x={effectBoxLabelX} y={effectBoxY-labelPadding} fontSize={labelSize}>Effect</text>
        <foreignObject
          className='content-text'
          x={effectBoxX + effectBoxTextPadding} y={effectBoxY + effectBoxTextPadding}
          width={effectBoxWidth - 2*effectBoxTextPadding} height={effectBoxHeight - 2*effectBoxTextPadding}
          fontSize={smallBoxFontSize}
        >
          {effect}
        </foreignObject>
      </g>

      <g className='school'>
        <text className='label-text' x={schoolX} y={schoolY} fontSize={schoolFontSize}>{school}</text>
      </g>

      <g className='page'>
        <rect className='content-bg' x={pageBoxX} y={pageBoxY} width={pageBoxWidth} height={pageBoxHeight} />
        <text className='label-text' x={pageLabelX} y={pageLabelY} textAnchor='end' fontSize={labelSize}>pg</text>
        <text className='content-text' x={pageContentX} y={pageContentY} fontSize={pageContentSize} textAnchor='middle'>{page}</text>
      </g>
    </svg>
  )
}

SpellCard.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  mp: PropTypes.number,
  range: PropTypes.string,
  duration: PropTypes.string,
  target: PropTypes.string,
  defense: PropTypes.string,
  effect: PropTypes.string,
  page: PropTypes.number,
  school: PropTypes.string,
}