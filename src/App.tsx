import { compose } from 'hocs'
import { withAuth } from 'hocs/withAuth'

import { RenderRoute } from './routes'

const App = () => <RenderRoute />

export default compose(App, withAuth)
