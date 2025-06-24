import MapComponent from "./map-component"

const MapContainer = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-welding-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Visit our training center in Harare or get in touch with us through phone or email.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <MapComponent />
        </div>
      </div>
    </section>
  )
}

export default MapContainer
