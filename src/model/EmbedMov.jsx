import React from 'react'
// import { Embed } from 'semantic-ui-react'

const EmbedMov = () => (
    <div className="row mt-2">
        <div className="col">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe title="mov1" class="embed-responsive-item" src="https://www.youtube.com/embed/VTzHj-R9McA" allowfullscreen></iframe>
            </div>
        </div>
        <div className="col">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe title="mov2" class="embed-responsive-item" src="https://www.youtube.com/embed/vJkz1pEBqf8" allowfullscreen></iframe>
            </div>
        </div>
        <div className="col">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe title="mov3" class="embed-responsive-item" src="https://www.youtube.com/embed/HcKHBEp5jrQ" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    
)
export default EmbedMov;