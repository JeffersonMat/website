import React from "react"

function ButtonLink(props) {
  const renderingButton = () => {
    return (
      <div className="button-fixed">
        {props.content.src !== "" && (
          <>
            <a
              className="btn waves-effect white grey-text darken-text-2 portfolio-button"
              target="_blank"
              href={`${props.content.src}`}
            >
              Visit App
            </a>
          </>
        )}
      </div>
    )
  }
  return renderingButton()
}

export default ButtonLink
