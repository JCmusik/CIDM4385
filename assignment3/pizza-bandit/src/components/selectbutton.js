import React, { Component } from 'react';

class SelectButton extends Component {
    state = {
        className: 'btn btn-primary',
        selected: true,
        name: 'Add to Cart',
        item: '',
        selection: ''
    }

    changeButtonClass = (selected) => {
        let className = selected ? 'btn btn-success' : 'btn btn-primary';
        let name = selected ? 'Added' : 'Add to Cart';
        this.setState({
            className,
            name
        })
    }

    handleCardClick = () => {
        const choice = this.props.title;
        const amt = this.props.price;
        const selected = this.state.selected;
        this.setState({
            selected: !this.state.selected
        }, () => this.changeButtonClass(selected));
        this.props.onCardClick(choice, selected, amt);

    }

    render() {
        const { name, className } = this.state;
        return (
            <React.Fragment>
                <button className={className} onClick={this.handleCardClick}>{name}</button>
            </React.Fragment>
        );
    }
}

export default SelectButton;