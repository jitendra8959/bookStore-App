import { useLoader } from '../../context/LoaderContext'

export default function Loader() {
  const { isLoading } = useLoader();
  return (
    <div className="progress-loader" hidden={!isLoading}>
      <div id="overlay"></div>
      <div className="ring">
        <span></span>
      </div>
    </div>
  )
}
