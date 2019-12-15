import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

/**data
 *
 *  authorId
 *  content
 *  date
 *  excerpt
 *  id
 *  thumbnail
 *  title
 */

const PostItem = ({className, content, date, excerpt, thumbnail, title}) => {
    return (
        <div className={className}>
            <div>thumbnail</div>
            <div className="post-data">
                <div>{date}</div>
                <div>{title}</div>
            </div>
            <div className="controls">
                <Button>e</Button>
                <Button>i</Button>
            </div>
        </div>
    )
}

export default styled(PostItem)`
    border: 1px solid #A6A6A6;
    margin: 10px 0;
    padding: 10px;
`;

