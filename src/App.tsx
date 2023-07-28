import { compose } from 'hocs'
import { withAuth } from 'hocs/withAuth'

import { RenderRoute } from './routes'
import 'assets/scss/app.scss'

const App = () => <RenderRoute />

export default compose(App, withAuth)
