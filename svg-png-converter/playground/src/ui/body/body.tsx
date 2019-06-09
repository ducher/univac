import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'
import { Input } from './input'
import { Options } from './options'
import { Output } from './output'

export class Body extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
        <Grid>
          <Grid.Column floated='left' width={6}>
            <Options />
          </Grid.Column>
          <Grid.Column floated='right' width={10}>
            <Input />
            <Output />
          </Grid.Column>
        </Grid>
      </Segment>)
  }
}
