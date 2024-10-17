import usecase from '../usecase/usecase.js';

const getActivity = (req, res) => {
  try {
    const { size } = req.query;
    const parseSize = parseInt(size);
    const result = usecase.allActivity(parseSize);

    return res.status(200).json({
      code: 200,
      status: 'success',
      data: result,
      message: 'Get activity successful',
    });
  } catch (e) {
    return res.status(500).json({
      code: 400,
      status: 'error',
      message: e.message,
    });
  }
};

const findActivity = (req, res) => {
  try {
    const id = req.params.id;
    const parseId = parseInt(id);
    const result = usecase.oneActivity(parseId);

    return res.status(200).json({
      code: 200,
      status: 'success',
      data: result,
      message: 'Find activity successful',
    });
  } catch (e) {
    return res.status(500).json({
      code: 400,
      message: e.message,
      status: 'error'
    });
  }
}

export default {
  getActivity,
  findActivity,
};
