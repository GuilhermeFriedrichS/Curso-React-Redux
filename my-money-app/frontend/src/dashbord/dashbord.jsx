import React, {Component} from "react"
import { connect } from 'react-redux'

import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import ValueBox from "../common/widget/valueBox"
import Row from "../common/layout/row"

class Dashbord extends Component {
    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <Content>
                    <ContentHeader title = 'Dashboard' small='Versão 1.0'/>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Cŕeditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='bank'
                            value={`R$ ${credit - debt}`} text='Total de Consolidado'/>
                    </Row>                
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashbord.summary})
export default connect(mapStateToProps)(Dashbord)