import React from 'react';
import styled from 'styled-components';

const _LessonOverviewTable = ({className, lessons}) => {
    if(!lessons) return <div>Loading....</div>
    return (
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Used in</td>
                    <td>Tags</td>
                    <td>createdAt</td>
                    <td>assigned</td>
                    <td>video</td>
                    <td>documents</td>
                </tr>
            </thead>
            <tbody>
                {lessons.map(lesson => (
                    <tr>
                        <td>{lesson.title}</td>
                        <td>{lesson.tags}</td>
                        <td>{lesson.favs
                                ? lesson
                                    .favs
                                    .count()
                                : 0}</td>
                        <td>{lesson.createdAt}</td>
                        <td>{lesson.assigned
                                ? lesson
                                    .assigned
                                    .count()
                                : 0}</td>
                        <td>{lesson.video
                                ? 'Yes'
                                : 'No'}</td>
                        <td>{lesson.documents
                                ? 'Yes'
                                : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default styled(_LessonOverviewTable)`

`;