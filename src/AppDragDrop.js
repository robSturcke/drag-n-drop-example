import React, { Component } from 'react';
import './App.css';

export default class AppDragDrop extends Component {
    state = {
        tasks: [
          {name: 'Angular', category: 'wip', bgColor: 'yellow'},
          {name: 'React', category: 'wip', bgColor: 'blue'},
          {name: 'Vue', category: 'complete', bgColor: 'green'}
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData('id', id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData('id');

        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });

    }

    render() {
        let tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
              <div key={t.name}
                   onDragStart={(e) => this.onDragStart(e, t.name)}
                   draggable
                   className="draggable"
                   style={{backgroundColor: t.bgColor}}
                   >
                  {t.name}
              </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">Drag and drop dude!</h2>
                <div className="wip"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, 'wip')}
                    >
                    <span className="task-header">In-Progress</span>
                    {tasks.wip}
                </div>
                <div className="droppable"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e) => this.onDrop(e, 'complete')}
                     >
                    <span className="task-header">Completed</span>
                    {tasks.complete}
                </div>
            </div>
        );
    }
}
