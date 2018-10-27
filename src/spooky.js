var sketch = require('sketch')

const document = sketch.getSelectedDocument()
const selectedLayer = document.selectedLayers.layers[0]

if (!selectedLayer || selectedLayer.type !== 'Image') {
  sketch.UI.message('You need to select an image')
}

__mocha__.loadFrameworkWithName('Vision')

// compile the model
const compiledModelURL = MLModel.compileModelAtURL_error(
  context.plugin.urlForResourceNamed("PumpkinCleaver.mlmodel"),
  null
)
// load the compiled model
const model = MLModel.modelWithContentsOfURL_error(
  compiledModelURL,
  null
)
// transform our model into a Vision model
const vnModel = VNCoreMLModel.modelForMLModel_error(
  model,
  null
)
// create a an image analysis request that uses
// our Core ML model to process images
const request = VNCoreMLRequest
  .alloc()
  .initWithModel(vnModel)

// VNImageRequestHandler expects a "CIImage"
// Luckily, we can create one from our image layer
const ciImage = CIImage.imageWithData(
  selectedLayer.image.nsdata
)
const handler = VNImageRequestHandler
  .alloc()
  .initWithCIImage_options(
    ciImage,
    null
  )

const success = handler.performRequests_error(
  [request],
  null
)

if (success) {
  const bestEstimation = request.results()[0]
  const isAPumpkin = String(bestEstimation.identifier()) === 'pumpkin'
  sketch.UI.message(
    isAPumpkin ? "🔪🎃 very  s p o o o o k y 🔪🎃 " : "☹️ more spooky, plz, thx ☹️"
  );
} else {
  sketch.UI.message('Something went wrong 😕')
}
