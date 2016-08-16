import React, { Component } from 'react';

class SlackButton extends Component {
    render() {
        return (
            <div className="grid-centered">
                <a href='https://beepboophq.com/api/slack/auth/add-to-slack/fa3f3f7833d84e28a22465c2ab406239'>
                    <img alt='Add to Slack'
                        height='40' width='139'
                        src='https://platform.slack-edge.com/img/add_to_slack.png'
                        srcSet='https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x' />
                </a>
            </div>
        );
    }
}

export default SlackButton;
