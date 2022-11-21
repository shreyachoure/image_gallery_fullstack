import React from "react";
import "./FloatingButton.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

let element = <FontAwesomeIcon icon={faPlus} />

function FloatingButton() {
  return (
    <div>
      <a href="/inputMemory" class="float">
        <i class="fa fa-plus my-float"></i>
      </a>
    </div>
  );
}

export default FloatingButton;