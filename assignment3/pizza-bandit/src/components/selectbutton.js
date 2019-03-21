import React, { Component } from 'react';

class SelectButton extends Component {
    state = {
        className: 'btn btn-primary',
        selected: false,
        name: 'Add to Cart',
        item: ''
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

    handleCardClick = (e) => {
        this.setState({
            selected: !this.state.selected
        }, () => this.changeButtonClass());
        this.props.onCardClick(e);

    }

    render() {
        const { name, className } = this.state;
        return (
            <button className={className} onClick={this.handleCardClick}>{name}</button>
        );
    }
}

export default SelectButton;