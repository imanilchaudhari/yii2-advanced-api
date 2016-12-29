<?php
 
namespace api\modules\v1\controllers;

use Yii;
use yii\rest\ActiveController;
use yii\web\Response;
use yii\helpers\ArrayHelper;
use yii\web\BadRequestHttpException;

///use api\modules\v1\components\ActiveController;

use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;

 
/**
 * Page Controller API
 *
 * @author Anil Chaudhari <caanil90@gmail.com>
 */
class PageController extends ActiveController
{
    public $modelClass = 'api\modules\v1\models\Page';

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON;
        
        $behaviors['authenticator'] = [
            'class' => CompositeAuth::className(),
            'authMethods' => [
                HttpBasicAuth::className(),
                HttpBearerAuth::className(),
                QueryParamAuth::className(),
            ],
        ];
        
        return $behaviors;
    }

    /**
    
    // Some reserved attributes like 'q' for searching 
    // or 'sort' which is already supported by Yii RESTful API
    public $reservedParams = ['sort','q'];

    public function actions() {
        $actions = parent::actions();
        // 'prepareDataProvider' is the only function that need to be overridden here
        $actions['index']['prepareDataProvider'] = [$this, 'indexDataProvider'];
        return $actions;
    }

    public function indexDataProvider() {

        $params = \Yii::$app->request->queryParams;

        $model = new $this->modelClass;
        // I'm using yii\base\Model::getAttributes() here
        // In a real app I'd rather properly assign 
        // $model->scenario then use $model->safeAttributes() instead
        $modelAttr = $model->attributes;

        // this will hold filtering attrs pairs ( 'name' => 'value' )
        $search = [];

        if (!empty($params)) {
            foreach ($params as $key => $value) {
                // In case if you don't want to allow wired requests
                // holding 'objects', 'arrays' or 'resources'
                if(!is_scalar($key) or !is_scalar($value)) {
                    throw new BadRequestHttpException('Bad Request');
                }
                // if the attr name is not a reserved Keyword like 'q' or 'sort' and 
                // is matching one of models attributes then we need it to filter results
                if (!in_array(strtolower($key), $this->reservedParams) 
                    && ArrayHelper::keyExists($key, $modelAttr, false)) {
                    $search[$key] = $value;
                }
            }
        }

        // you may implement and return your 'ActiveDataProvider' instance here.
        // in my case I prefer using the built in Search Class generated by Gii which is already 
        // performing validation and using 'like' whenever the attr is expecting a 'string' value.
        $searchByAttr['PageSearch'] = $search;
        $searchModel = new \api\modules\v1\models\search\Page();    
        return $searchModel->search($searchByAttr);     
    }
    **/
}