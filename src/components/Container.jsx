import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[1366px] px-5 py-5 md:p-10 lg:px-20 lg:py-10">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object.isRequired
}

export default Container
