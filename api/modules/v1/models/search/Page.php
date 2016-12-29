<?php

namespace api\modules\v1\models\search;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use api\modules\v1\models\Page as PageModel;

/**
 * Page represents the model behind the  form about `common\models\Page`.
 */
class Page extends PageModel
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'category_id', 'hits', 'status', 'profession_id', 'is_deleted'], 'integer'],
            [['title', 'slug', 'seo_title', 'seo_keyword', 'seo_description', 'summary', 'detail'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = PageModel::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);
        if (!$this->validate()) {
            $query->where('1=0');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'category_id' => $this->category_id,
            'hits' => $this->hits,
            'status' => $this->status,
            'profession_id' => $this->profession_id,
            'is_deleted' => $this->is_deleted,
        ]);

        $query->andFilterWhere(['like', 'title', $this->title])
            ->andFilterWhere(['like', 'slug', $this->slug])
            ->andFilterWhere(['like', 'seo_title', $this->seo_title])
            ->andFilterWhere(['like', 'seo_keyword', $this->seo_keyword])
            ->andFilterWhere(['like', 'seo_description', $this->seo_description])
            ->andFilterWhere(['like', 'summary', $this->summary])
            ->andFilterWhere(['like', 'detail', $this->detail]);

        return $dataProvider;
    }
}
