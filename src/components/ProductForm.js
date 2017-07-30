import React from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

class ProductForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    console.log(this.props.form.getFieldValue('model-number'))
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14}
      }
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label='产品型号'
        >
          {getFieldDecorator('model-number')(
            <Input  placeholder='产品型号' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='产品价格'
        >
          {getFieldDecorator('price')(
            <Input  placeholder='产品价格' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='产品尺寸'
        >
          {getFieldDecorator('size')(
            <Input  placeholder='产品尺寸' />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: {span: 24, offset: 0},
            sm: {span: 16, offset: 5}
          }}
        >
          <Button type='primary' htmlType='submit' size='large'>提交</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create({mapPropsToFields: props => ({'model-number': {value: props['model-number']}}) })(ProductForm)