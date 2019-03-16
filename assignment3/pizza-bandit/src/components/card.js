import React, { Component } from 'react';
import SelectButton from '../components/selectbutton';


class Card extends Component {
    state = {
        className: 'btn btn-primary',
        selected: false,
        name: 'Add to Cart'
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            selected: !this.state.selected
        },
            () => { this.changeButtonClass() });
    }

    changeButtonClass = () => {
        let selected = this.state.selected;
        let className = selected ? 'btn btn-success' : 'btn btn-primary';
        let name = selected ? 'Added' : 'Add to Cart';
        this.setState({
            className,
            name
        })
    }
    render() {
        const { title, image } = this.props;
        const { className, name } = this.state;
        return (
            <div className="card bg-secondary">
                <div className="card-body text-center">
                    <div className="card-title"><img className="img-thumbnail rounded" src={image} alt={title} /></div>
                    <h4 className="card-title bg">{title}</h4>
                    <SelectButton className={className}
                        onClick={this.handleClick}
                        name={name} />
                </div>
            </div>
        );
    }
}

export default Card;