<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "page".
 *
 * @property integer $id
 * @property integer $category_id
 * @property string $title
 * @property string $slug
 * @property string $seo_title
 * @property string $seo_keyword
 * @property string $seo_description
 * @property string $image
 * @property string $summary
 * @property string $detail
 * @property integer $hits
 * @property string $created_at
 * @property integer $status
 * @property integer $profession_id
 * @property string $updated_at
 * @property integer $is_deleted
 */
class Page extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'page';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['category_id', 'hits', 'status', 'profession_id', 'is_deleted'], 'integer'],
            [['seo_description', 'summary', 'detail'], 'string'],
            [['created_at', 'updated_at'], 'safe'],
            [['title'], 'string', 'max' => 245],
            [['seo_title'], 'string', 'max' => 120],
            [['seo_keyword'], 'string', 'max' => 150],
            [['slug'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'category_id' => 'Category ID',
            'title' => 'Title',
            'slug' => 'Slug',
            'seo_title' => 'Seo Title',
            'seo_keyword' => 'Seo Keyword',
            'seo_description' => 'Seo Desc',
            'summary' => 'Summary',
            'detail' => 'Detail',
            'hits' => 'Hits',
            'created_at' => 'Post Date',
            'status' => 'Status',
            'profession_id' => 'Profession ID',
            'updated_at' => 'Updated Date',
            'is_deleted' => 'Is Deleted',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }
}
